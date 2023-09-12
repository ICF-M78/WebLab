# 创建打包文件夹
mkdir dist
# 打包到windows环境运行
GOOS=windows GOARCH=amd64 go build -o mr_pdf_svr.exe main.go
# 移动mr_pdf_svr.exe到dist文件夹
mv mr_pdf_svr.exe ./dist
# 拷贝config.json到dist文件夹
cp config.json ./dist/config.json
#  压缩 mr_pdf_svr
tar -zcvf mr_pdf_svr.tar.gz ./dist
#  移动压缩包到桌面
mv mr_pdf_svr.tar.gz /Users/wujingtao/Desktop
#  删除dist文件夹
rm -rf dist