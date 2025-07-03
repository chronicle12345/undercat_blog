@echo off
chcp 65001 >nul

REM 确保脚本遇到错误时停止执行
setlocal EnableDelayedExpansion

echo 正在生成静态文件...
call npm run docs:build
if %errorlevel% neq 0 (
    echo 构建失败！
    pause
    exit /b %errorlevel%
)

echo 进入生成的文件夹...
cd docs\.vuepress\dist
if %errorlevel% neq 0 (
    echo 无法进入 dist 目录！
    pause
    exit /b %errorlevel%
)

echo 拷贝 .github 目录...
xcopy /E /I /Y ..\..\..\.github .github
if %errorlevel% neq 0 (
    echo 拷贝 .github 目录失败！
    pause
    exit /b %errorlevel%
)

echo 初始化 Git 仓库...
git init
if %errorlevel% neq 0 (
    echo Git 初始化失败！
    pause
    exit /b %errorlevel%
)

echo 添加所有文件...
git add -A
if %errorlevel% neq 0 (
    echo Git add 失败！
    pause
    exit /b %errorlevel%
)

echo 提交文件...
git commit -m "deploy"
if %errorlevel% neq 0 (
    echo Git commit 失败！
    pause
    exit /b %errorlevel%
)

echo 推送到 GitHub Pages...
git push -f git@github.com:chronicle12345/undercat_blog.git main:gh-pages
if %errorlevel% neq 0 (
    echo Git push 失败！
    pause
    exit /b %errorlevel%
)

echo 返回原目录...
cd ..\..\..

echo 部署完成！
pause
