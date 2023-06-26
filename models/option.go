package models

import (
	"gorm.io/gorm"
)

const OptionKeyOpenaiUrl = "openai_url"
const OptionKeyOpenaiSysPrompt = "openai_sys_prompt"

type Option struct {
	gorm.Model
	OptionKey   string `gorm:"type:varchar(45);unique;comment:OptionKey" binding:"required,min=2,max=18"`
	OptionValue string `gorm:"type:varchar(1000);comment:OptionValue"`
}
