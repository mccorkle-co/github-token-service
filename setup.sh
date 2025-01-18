export GITHUB_APP_PEM_FILE=$(awk -v ORS='\\n' '1' ./mccorkleco-pulumi.2025-01-17.private-key.pem)
export PULUMI_CONFIG_PASSPHRASE_FILE='./PULUMI_CONFIG_PASSPHRASE_FILE'
