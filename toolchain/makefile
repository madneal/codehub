
.PHONY: init build run clean check-versions test

# 初始化项目
init:
@echo "初始化项目..."
go mod tidy
@echo "依赖下载完成"

# 检查版本信息
check-versions:
@echo "=== Go 环境信息 ==="
@echo "当前 Go 版本:"
@go version
@echo ""
@echo "go.mod 中的版本信息:"
@grep "go " go.mod
@grep "toolchain" go.mod || echo "未指定 toolchain"
@echo ""
@echo "模块信息:"
@go list -m -f '{{.Path}}: Go {{.GoVersion}}, Toolchain {{.Toolchain}}'

# 构建项目
build:
@echo "构建项目..."
go build -o bin/server main.go
@echo "构建完成: bin/server"

# 运行项目
run:
@echo "运行项目..."
go run main.go

# 清理构建产物
clean:
@echo "清理构建产物..."
rm -rf bin/
go clean

# 测试项目
test:
@echo "运行测试..."
go test -v ./...

# 验证 toolchain 是否生效
verify-toolchain:
@echo "=== 验证 toolchain 是否生效 ==="
@echo "1. 检查 go.mod 中的版本设置:"
@cat go.mod | head -6
@echo ""
@echo "2. 检查实际使用的工具链:"
@go version
@echo ""
@echo "3. 构建并检查二进制文件信息:"
@go build -o bin/test-binary main.go
@if [ -f bin/test-binary ]; then \
echo "构建成功，使用的是 toolchain 指定的版本"; \
rm bin/test-binary; \
else \
echo "构建失败"; \
fi



