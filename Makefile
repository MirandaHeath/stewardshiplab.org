# © Vlad Miricioiu <vlad@vlad.website>
# SPDX-License-Identifier: Apache-2.0

# This file is just used by Vlad to make staging deployments.

.PHONY: site publish-staging

site:
	pnpm build

publish-staging: site
	rsync -Pvrthl --delete --exclude .git --info=progress2 .output/public/ yavin:/srv/www/lab-staging/
