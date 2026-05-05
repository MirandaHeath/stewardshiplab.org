.PHONY: publish-prod

publish-prod:
	rsync -PXvrthl --delete --exclude .git --info=progress2 ./ yavin:/srv/www/org.stewardshiplab
