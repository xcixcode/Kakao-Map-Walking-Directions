const coords = {
    "대학본부": "963341,461166",
    "법정관": "963501,461145",
    "상경대학": "963175,461203",
    "국제관": "963038,461530",
    "동의스포츠센터": "963541,461318",
    "상영관": "963489,461530",
    "수덕전": "963578,461749",
    "제1인문관": "963725,461599",
    "제2인문관": "963782,461785",
    "효민체육관": "963892,462026",
    "중앙도서관": "963639,462005",
    "여대생커리어개발관": "963346,461951",
    "제2효민생활관": "963141,462149",
    "가야캠퍼스_의료보건관": "963282,462107",
    "가야캠퍼스_생활과학관": "963328,462329",
    "가야캠퍼스_음악관": "963384,462557",
    "가야캠퍼스_창의관": "963718,462335",
    "평생교육원": "963656,462468",
    "가야캠퍼스_산학협력관": "963819,462590",
    "건윤관": "963844,462805",
    "공과대학": "963944,462525",
    "정보공학관": "963996,462916",
    "제1효민생활관": "964359,462368",
    "학생군사교육단": "964086,461928",
    "행복기숙사": "963337,461846",
    "효민야구장": "963278,460937",
    "효민축구장": "964247,462076",
    "효민원": "963305,461414",
    "혜안지": "963318,461587",
    "정심정": "963573,461431",
    "효민야외음악당": "963214,461858",
    "정문": "963482,462825"
};

const placeIds = {
    "대학본부": "17567947",
    "법정관": "443993613",
    "상경대학": "17555572",
    "국제관": "17567948",
    "동의스포츠센터": "17564059",
    "상영관": "17562178",
    "수덕전": "17555583",
    "제1인문관": "17567937",
    "제2인문관": "17555663",
    "효민체육관": "17555581",
    "중앙도서관": "17806811",
    "여대생커리어개발관": "17562232",
    "제2효민생활관": "17566019",
    "가야캠퍼스_의료보건관": "1225814339",
    "가야캠퍼스_생활과학관": "1410626926",
    "가야캠퍼스_음악관": "1818343773",
    "가야캠퍼스_창의관": "2039104218",
    "평생교육원": "698310131",
    "가야캠퍼스_산학협력관": "1994398144",
    "건윤관": "17564048",
    "공과대학": "11327797",
    "정보공학관": "17561330",
    "제1효민생활관": "14921059",
    "학생군사교육단": "17562177",
    "행복기숙사": "27389111",
    "효민야구장": "17568468",
    "효민축구장": "26962375",
    "효민원": "17564976",
    "혜안지": "17565982",
    "정심정": "17806843",
    "효민야외음악당": "17555690",
    "정문": "1567679508"
};

const startSelect = document.getElementById('start');
const endSelect = document.getElementById('end');

function populateSelects() {
    startSelect.innerHTML = '<option value="">출발지를 선택하세요</option>';
    endSelect.innerHTML = '<option value="">도착지를 선택하세요</option>';

    for (const name in coords) {
        let opt1 = document.createElement('option');
        opt1.value = name;
        opt1.textContent = "동의대학교 " + name;
        startSelect.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = name;
        opt2.textContent = "동의대학교 " + name;
        endSelect.appendChild(opt2);
    }
}

populateSelects();

function findRoute() {
    const start = startSelect.value;
    const end = endSelect.value;

    if (!start || !end) {
        alert("출발지와 도착지를 모두 선택하세요.");
        return;
    }
    if (start === end) {
        alert("출발지와 도착지는 다르게 선택해주세요.");
        return;
    }

    const url = `https://map.kakao.com/?map_type=TYPE_MAP&target=walk` +
                `&rt=${coords[start]},${coords[end]}` +
                `&rt1=동의대학교+${encodeURIComponent(start)}` +
                `&rt2=동의대학교+${encodeURIComponent(end)}` +
                `&rtIds=,${placeIds[end]}`;

    window.open(url, "_blank");
}

function swapPoints() {
    const temp = startSelect.value;
    startSelect.value = endSelect.value;
    endSelect.value = temp;
}

function clearSelection() {
    startSelect.value = "";
    endSelect.value = "";
}
