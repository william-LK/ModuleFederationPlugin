
import("teamB/componentA").then((res) => {
    const componentA = res.default;
    componentA();
});
import("teamB/componentB").then((res) => {
    const componentA = res.default;
    componentA();
});

console.log('入口1')