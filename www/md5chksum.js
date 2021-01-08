exports.file = function(path, success, error){
		if (path){
			cordova.exec(success, error, "md5chksum", "file", [path]);
		}else{
			error("md5chksum: no path");
		}
};


