
class Api {
	api = 'http://94.45.133.173:8000/';
	
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

	getCoastCenters(resolve) {
		let result = fetch(`${this.api}cost-centers`, {mode: 'cors'})
      .then(response => response.json())
      .then(data => {
      	const multiSelectOptions = data.result.map(option => {
      		option.value = option['cost_center_id'];
      		return option;
      	})
      	resolve({
      		coastCenters: multiSelectOptions
      	})
      })
      .catch(error => console.error(error));


	}

}

export const API = new Api();