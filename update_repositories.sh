cat firstissue_repositories.sql |
  curl -s 'https://play.clickhouse.com/?user=play' --data-binary @- |
  xargs jq '.repositories |= (. + $ARGS.positional | unique | sort_by(. | ascii_upcase))' firstissue.json --args >tmp.json &&
  mv tmp.json firstissue.json
