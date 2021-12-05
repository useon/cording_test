// # 문제9 : concat을 활용한 출력 방법

// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// **데이터**
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = //빈칸을 채워주세요

// console.log(result);

// **출력**
// 2019/04/26 11:34:27

// 정답: var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// 알게 된 내용 정리
// `concat()` 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.

// - 기존배열을 변경하지 않는다.
// - 추가된 새로운 배열을 반환한다.

// `array.concat([value1[, value2[, ...[, valueN]]]])`

// 배열끼리 합치는 것이 아니더라도 이렇게 만들 수 있다 !