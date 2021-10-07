function BBB() {
	console.log("i am componentB");
}

import("projectC/watcher").then((res) => {
	const watcher = res.default;
	// componentA();
	console.log(watcher, '观察者')
	setTimeout(() => {
		watcher.state.a = 3;
		console.log(watcher.state.a, '修改后')
	}, 5000)
});

export default BBB;