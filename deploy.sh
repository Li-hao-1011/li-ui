rm -rf dist &&
pnpm build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:Li-hao-1011/li-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://li-hao-1011.github.io/li-ui-website/#/