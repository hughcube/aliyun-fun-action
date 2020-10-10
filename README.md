<h1 align="center">AliYun CLI GitHub Actions</h1>


<p>
    <a href="https://github.com/hughcube/aliyun-cli-action/actions?query=workflow%3ATest">
        <img src="https://github.com/hughcube/aliyun-cli-action/workflows/Test/badge.svg" alt="Test Actions status">
    </a>
    <a href="https://github.com/hughcube/aliyun-cli-action/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-428f7e.svg" alt="License">
    </a>
</p>

This action installs and configures [Aliyun command line tool](https://github.com/aliyun/aliyun-cli) for use in your GitHub
Action steps.

## Usage

```yaml
steps:
- uses: actions/checkout@v1
- uses: hughcube/aliyun-cli-action@v1.0.0
  with:
    access-key-id: ${{ secrets.ALIYUN_ACCESS_KEY_ID }}
    access-key-secret: ${{ secrets.ALIYUN_ACCESS_KEY_SECRET }}
    region: ${{ secrets.ALIYUN_REGION }}
- run: aliyun oss cp ./dir oss://backet/path -r -u
```

## License

MIT
