var createCounter = function(n) {
    return () => n++; // 回傳計數函式，每次呼叫都遞增 n
};

var runTestCases = function(n, calls) {
    const counter = createCounter(n);  // 建立計數器
    return calls.map(() => counter()); // 執行並回傳結果
};

// 題目提供的輸入
console.log(runTestCases(-2, ["call", "call", "call", "call", "call"])); 
// 輸出: [-2, -1, 0, 1, 2]

console.log(runTestCases(10, ["call", "call", "call"])); 
// 輸出: [10, 11, 12]

console.log(runTestCases(0, [])); 
// 輸出: [] (因為沒有 "call"，所以回傳空陣列)
