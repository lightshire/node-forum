module.exports = {
	
	// Name of the application (used as default <title>)
	appName: "Node Forum",

	// Port this Sails application will live on
	port: 1337,

	// The environment the app is deployed in 
	// (`development` or `production`)
	//
	// In `production` mode, all css and js are bundled up and minified
	// And your views and templates are cached in-memory.  Gzip is also used.
	// The downside?  Harder to debug, and the server takes longer to start.
	environment: 'development',

	// Logger
	// Valid `level` configs:
	// 
	// - error
	// - warn
	// - debug
	// - info
	// - verbose
	//
	log: {
		level: 'info'
	},

	//this is a fast fix - still need to know how to get the base url
	base_url: 	"http://localhost:1337"

};