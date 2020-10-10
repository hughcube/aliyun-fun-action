<h1 align="center">AliYun Fun GitHub Actions</h1>


<p>
    <a href="https://github.com/hughcube/aliyun-fun-action/actions?query=workflow%3ATest">
        <img src="https://github.com/hughcube/aliyun-fun-action/workflows/Test/badge.svg" alt="Test Actions status">
    </a>
    <a href="https://github.com/hughcube/aliyun-fun-action/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-428f7e.svg" alt="License">
    </a>
</p>

This action installs and configures [AliYun Fun command line tool](https://github.com/alibaba/funcraft) for use in your GitHub
Action steps.

## Usage

```yaml
steps:
- uses: actions/checkout@v1
- uses: hughcube/aliyun-fun-action
  with:
    account_id: ${{ secrets.ALIYUN_ACCOUNT_ID }}
    access-key-id: ${{ secrets.ALIYUN_ACCESS_KEY_ID }}
    access-key-secret: ${{ secrets.ALIYUN_ACCESS_KEY_SECRET }}
- run: fun deploy
```

## License

MIT
