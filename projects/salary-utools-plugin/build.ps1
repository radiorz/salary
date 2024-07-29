# 将 src 和 salary-client/dist 复制到 dist 中

Copy-Item -Path "..\salary-client\dist\*" -Destination "dist" -Recurse
Copy-Item -Path "src/*" -Destination "dist" 
