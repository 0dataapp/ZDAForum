const mod = {

	ZDAForumHotfixPatches () {
		return {
			'./node_modules/ROCOForum/main.ejs': {
				'?category=<%= ROCOForumTopic %>&amp;': '?alfa=bravo&amp;',
				'" category="<%= ROCOForumTopic %>" per-page': '"  per-page',
				'/c/<%= ROCOForumTopic %>': '/',
			},
		};
	},

};

Object.assign(exports, mod);
