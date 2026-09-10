# GitHub Pages 배포 스크립트 (처음 한 번: gh auth login 후 실행)
# 사용: PowerShell에서  .\deploy.ps1
$ErrorActionPreference = "Stop"
$repo = "ssu-aics-workshop-2026"

gh auth status
if (-not $?) { Write-Host "먼저 'gh auth login' 으로 GitHub에 로그인하세요."; exit 1 }

$owner = gh api user -q .login
if (-not (Test-Path ".git")) { git init -b main | Out-Null }
git add -A
git commit -m "Update workshop site" 2>$null | Out-Null

$exists = gh repo view "$owner/$repo" 2>$null
if (-not $exists) {
  gh repo create $repo --public --source . --remote origin --push --description "2026 하반기 SSU AICS 워크샵 사이트"
} else {
  if (-not (git remote | Select-String -Quiet "^origin$")) { git remote add origin "https://github.com/$owner/$repo.git" }
  git push -u origin main
}

# GitHub Pages 켜기 (이미 켜져 있으면 무시)
try { gh api -X POST "repos/$owner/$repo/pages" -F "source[branch]=main" -F "source[path]=/" | Out-Null } catch {}

Write-Host ""
Write-Host "배포 완료! 1~2분 뒤 접속:  https://$owner.github.io/$repo/"
