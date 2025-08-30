# Go Toolchain 版本不一致验证项目

这个项目用于验证 `go.mod` 中 `go` 版本和 `toolchain` 版本不一致的情况。

## 项目配置

- **go 版本**: 1.21.1 (语言兼容性)
- **toolchain 版本**: go1.22.9 (实际构建工具链)

## 验证步骤

### 1. 初始化项目
```bash
make init
```

### 2. 检查版本信息
```bash
make check-versions
```

### 3. 验证 toolchain 是否生效
```bash
make verify-toolchain
```

### 4. 构建并运行
```bash
# 构建
make build

# 或直接运行
make run
```

### 5. 测试访问
项目运行后，访问以下地址：
- http://localhost:8080 - 主页，显示版本信息
- http://localhost:8080/version - 版本详情页

## 预期结果

1. **代码兼容性**: 项目只使用 Go 1.21.1 的语言特性
2. **构建工具链**: 实际使用 go1.22.9 进行构建
3. **运行时版本**: 显示的是 go1.22.9 (因为用该版本编译)

## 验证命令详解

```bash
# 查看当前 Go 版本
go version

# 查看模块要求的版本
go list -m -f '{{.GoVersion}}'

# 查看模块的 toolchain
go list -m -f '{{.Toolchain}}'

# 构建时显示详细信息
go build -x main.go
```

## 关键验证点

1. ✅ 项目可以正常构建和运行
2. ✅ 实际使用 go1.22.9 工具链编译
3. ✅ 代码严格遵循 Go 1.21.1 语法规范
4. ✅ 不同环境下构建结果一致

这证明了 `toolchain` 版本高于 `go` 版本是安全且有效的配置。
