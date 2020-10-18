// ECMAScript(ES) - ECMA's standard
// JavaScript - programming language
// JavaScript - netscape vs microsoft
// JS runtime 1 - chrome - 实现了XMLHttpRequest
// JS runtime 2 - node js

//准备做AJAX
function loadCourses() {
    // 1. 使用XMLHttpRequest发送请求
    const xhr = new XMLHttpRequest();
    console.log("Initial state is " + xhr.readyState);
    // 回调函数，观测xhr的状态
    // 传函数的调用结果？×
    // 传函数的引用？✔️
    xhr.onreadystatechange = handleStateChange;
    xhr.open("GET", "https://bba2652e-da95-4d56-9a93-28de4c427108.mock.pstmn.io/courses", true);
    xhr.send(/*Request body*/);

    // 请问，在这一行执行完了吗？一定拿到结果了吗？ 
    // 结论：不一定
    console.log("After xhr.send() called");
}

// axios
// MERN - MEAN
function handleStateChange() {
    console.log("State changed to " + this.readyState);
    // http status code - 
    // 只关心成功拿到response的情况
    if (this.readyState === 4 && this.status === 200) {
        // 查看一下response body
        const courses = JSON.parse(this.responseText);
        renderCourses(courses);
    }
}

// 2. 把大象(courses)装冰箱(tbody里)
function renderCourses(courses) {
    debugger;
    const courseRows = courses
        // 把[{course}] -> [html String row]
        .map(course => convertToHtmlString(course))
        // 把[html String row] -> concat together
        .reduce((r1, r2) => r1 + r2);

    document.getElementById("course-content").innerHTML = courseRows;
}

// course - object
function convertToHtmlString(course) {
    let row = '<tr>';
    row += `<td>${course.courseName}</td>`;
    row += `<td>${course.courseContent}</td>`;
    row += `<td>${course.courseLocation}</td>`;
    row += `<td>${course.teacherId}</td>`;
    row += '</tr>';
    return row;
}
// 1. 原生html + css + js
// 2. JQuery
// 3. Angular.js
// 4. Angular/React/Vue


// git init
// 
