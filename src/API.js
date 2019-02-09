
class Api {
	
	signIn(user) {
		let promise = new Promise((resolve, reject)=>{
			setTimeout(()=>{
			if (user.login === 'user' || user.login === 'admin') {
				resolve({status: 'success',
						 user: {
							name: 'John Smith',
							role: user.login
						 }
						});
			} else {
				resolve({status: 'error',
						 error: {
							description: 'Логин админа - admin, юзера - user'
						 }
						});
			}
		}, 2000);
		});
		return promise;
	}

}

export const API = new Api();