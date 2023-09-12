package pdf

import (
	"mr_pdf_svr/config"
	"net/http"
	"os"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

/** @description pdf文件 */
type PdfFile struct {
	FileName string `json:"file_name"`
}

var Base_Path = config.GetConfig().BasePath

/** @description 获取文件夹的文件列表 */
func GetSubDirs(dir_path string) ([]os.DirEntry, error) {
	entries, err := os.ReadDir(dir_path)
	if err != nil {
		return nil, err
	}

	var dirs []os.DirEntry
	for _, entry := range entries {
		if entry.IsDir() {
			dirs = append(dirs, entry)
		}
	}

	return dirs, nil
}

/** @description 判断文件夹是否在此文件夹中（根据文件名） */
func IsExistDir_ByDirName(tag_dir_name string, sub_dir_name string) bool {
	dir_arr := strings.Split(tag_dir_name, "-")
	sub_dir_int, _ := strconv.Atoi(sub_dir_name)
	dir_beg_int, _ := strconv.Atoi(dir_arr[0])
	dir_end_int, _ := strconv.Atoi(dir_arr[1])
	if sub_dir_int > dir_beg_int && sub_dir_int < dir_end_int {
		return true
	} else {
		return false
	}
}

/** @description 判断病历文件存在与否 */
func GetMrDirPath(ips_id string) string {
	dirs, _ := GetSubDirs(Base_Path)
	tag_dir := ""
	for _, dir := range dirs {
		is_exist_dir := IsExistDir_ByDirName(dir.Name(), ips_id)
		if is_exist_dir {
			tag_dir = dir.Name()
			break
		}
	}

	if tag_dir == "" {
		return ""
	} else {
		mr_dir_path := Base_Path + "/" + tag_dir
		_is_exist_dir := IsExistDir(mr_dir_path, ips_id)
		if _is_exist_dir {
			return mr_dir_path + "/" + ips_id
		} else {
			return ""
		}
	}
}

/** @description 判断文件夹是否在此文件夹中 */
func IsExistDir(tag_dir_path string, cur_dir_name string) bool {
	dirs, _ := GetSubDirs(tag_dir_path)
	for _, dir := range dirs {
		if dir.Name() == cur_dir_name {
			return true
		}
	}
	return false
}

/** @description 获取文件夹pdf列表 */
func GetPdfLs(dir_path string) ([]os.DirEntry, error) {
	entries, err := os.ReadDir(dir_path)
	if err != nil {
		return nil, err
	}

	var pdfs []os.DirEntry
	for _, entry := range entries {
		if !entry.IsDir() {
			pdfs = append(pdfs, entry)
		}
	}

	return pdfs, nil
}

func RegPdfRoutes(pdf *gin.RouterGroup) {

	/** @description 获取电子病历文件夹 */
	pdf.POST("/GetMrDirPath", func(c *gin.Context) {
		var body struct {
			IpsId string `json:"ips_id"`
		}

		if err := c.BindJSON(&body); err != nil {
			c.String(http.StatusNotFound, "Error: %s", "参数解析错误")
		}

		ips_id := body.IpsId
		mr_dir_path := GetMrDirPath(ips_id)
		if mr_dir_path == "" {
			c.String(http.StatusNotFound, "Error: %s", "文件不存在")
		} else {
			// 返回json
			c.JSON(http.StatusOK, gin.H{
				"dir_path": mr_dir_path,
			})
		}
	})

	/** @description 获取电子病历文件夹中的pdf文件列表 */
	pdf.POST("/GetMrPdfLs", func(c *gin.Context) {
		var body struct {
			MrDirPath string `json:"mr_dir_path"`
		}

		if err := c.BindJSON(&body); err != nil {
			c.String(http.StatusNotFound, "Error: %s", "参数解析错误")
		}

		mr_dir_path := body.MrDirPath
		pdfs, _ := GetPdfLs(mr_dir_path)
		var pdf_file_ls []PdfFile
		for _, pdf := range pdfs {
			if strings.HasSuffix(pdf.Name(), ".pdf") {
				pdf_file_ls = append(pdf_file_ls, PdfFile{FileName: pdf.Name()})
			}
		}
		// 返回json数组
		c.JSON(http.StatusOK, pdf_file_ls)
	})

	/** @description 根据pdf文件名获取pdf文件 */
	pdf.POST("/GetPdfFile", func(c *gin.Context) {
		var body struct {
			PdfPath string `json:"pdf_path"`
		}

		if err := c.BindJSON(&body); err != nil {
			c.String(http.StatusNotFound, "Error: %s", "参数解析错误")
		}

		pdf_path := body.PdfPath
		c.File(pdf_path)
	})
}
