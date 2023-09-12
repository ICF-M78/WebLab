package config

import (
	"encoding/json"
	"os"
)

/** @description 配置文件 */
type Config struct {
	Port     string
	BasePath string
}

/** @description 获取配置 */
func GetConfig() Config {
	config_file, _ := os.Open("config.json")
	defer config_file.Close()
	var config Config
	json.NewDecoder(config_file).Decode(&config)
	return config
}
