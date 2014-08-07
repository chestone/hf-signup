mongoimport -d hackfortress -c players data/raw/testdata-players.json --jsonArray
mongo hackfortress --eval "db.players.ensureIndex('name')"

mongoimport -d hackfortress -c teams data/raw/testdata-teams.json --jsonArray
mongo hackfortress --eval "db.teams.ensureIndex('name')"

mongoimport -d hackfortress -c teams data/raw/timeslots.json --jsonArray
mongo hackfortress --eval "db.timeSlots.ensureIndex('begin')"
