Next js 에서 Material-ui를 테스트 해보기 위해 Google의 메인 페이지를 디자인을 따라 해보았습니다. 

시작하는 방법: cmd 창에서 "yarn dev" 를 입력시면 됩니다.  
To get started: input "yarn dev" in the cmd.

우선 Next js에서 페이지를 실행하면 서버사이드와 클라이언트 사이드에 두번의 렌더링을 하는 것을 경험 할수 있습니다. 
Material-ui를 적용해보니 .. 렌더링이 두번일어 났습니다.  두번째에 CSS 렌더링이 일어나는 현상을 경험하였습니다..
해결방안으로는 _document.js 파일에서 getInitialProps 함수를 이용하여 styleSheet를 가지고 오게 함으로써 해결.... 

컴파일이 완료 되면 [http://localhost:3000/](http://localhost:3000/) 해당 주소로 들어가면 아래와 같은 화면이 보입니다.
![index](./readme_image/index.png)

