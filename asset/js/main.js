// 체크박스 이미지 이용한 토글 기능

const checkbox = document.querySelector(".login_status_checkbox");
const checkboxLabel = document.querySelector(".login_status_label");
const checkImg = document.querySelector(".login_status_img");

checkboxLabel.addEventListener("click", () => {
  console.log(checkbox.checked);
  if (checkbox.checked) {
    checkImg.src = "asset/images/check-box.png";
  } else {
    checkImg.src = "asset/images/checked-box.png";
  }
});

// 로그인 버튼을 누르면 모달창이 나타남

const loginBtn = document.querySelector(".login-openModal_btn");
const modalWin = document.querySelector(".modal_wrapper");

loginBtn.addEventListener("click", () => {
  modalWin.style.display = "block";
});

// 모달창의 닫기 버튼 누르면 종료

const closeBtn = document.querySelector(".modal_close");

closeBtn.addEventListener("click", () => {
  modalWin.style.display = "none";
});
