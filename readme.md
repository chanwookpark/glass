# 이 애플리케이션은...
매일 사용하는 Confluence와 JIRA에서 내가 원하는 View와 데이터를 만들어 내기 위한 개인 프로젝트.

# 프로젝트 구성  
Spring boot와 Google App Engine 프로젝트 구성을 위해 다음 링크에서 설명하는 프로젝트를 복사해 생성함 (새로 만들 기능을 고려해 fork하지는 않았음;)

https://github.com/scratches/spring-boot-legacy

초기 세팅 및 GAE 배포 시 유의 사항

- 배포는 IntelliJ가 아니라 'gae:deploy' 사용. sub-module이라 IntelliJ에서는 안됨(root로만 가능)
- app sdk 경로 인식이 제대로 안되서 로컬에 설치한 절대 경로로 직접 지정함
- 당연히 app 이름은 변경
- spring boot로 하다보니까 web 프로젝트의 패키징 타입을 jar로 지정했는데 GAE로 올리려면 jar가 아닌 war로 지정해야 함
- 콘솔에서 입력하라는 패스워드는 구글 APP 패스워드임