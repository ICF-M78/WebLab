package main

import (
	"mr_pdf_svr/config"
	"mr_pdf_svr/pdf"

	"github.com/gin-gonic/gin"
)

// TEST 测试用患者id 1112002
func main() {
	config := config.GetConfig()

	r := gin.Default()

	// 创建一个名为 pdf 的路由组，并为它设置前缀和中间件
	pdf_r := r.Group("/Pdf", func(c *gin.Context) {
		// 在这里添加中间件
	})

	pdf.RegPdfRoutes(pdf_r)

	r.Run(":" + config.Port)
}
