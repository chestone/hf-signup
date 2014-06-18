mongoimport -d hackfortress -c players data/raw/testdata-players.json --jsonArray
mongo hackfortress --eval "db.players.ensureIndex('player_id')"
mongo hackfortress --eval "db.players.ensureIndex('team_id')"

mongoimport -d hackfortress -c teams data/raw/testdata-teams.json --jsonArray
mongo hackfortress --eval "db.teams.ensureIndex('team_id')"

