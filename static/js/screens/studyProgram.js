core.screen = {
	...core.screen,


    studyProgram: {
        
        async init(){
            let screen = new CoreScreen({
                id : "studyProgram",
                icon : "compass",
                title : "Chương Trình Đào Tạo",
                description : "Đừng tin",
                subTitle : "Chương Trình Đào Tạo"
            });

            core.account.onLogin(async () => {
                let pathStudyProgram = await api.request({
                    path: "/ChuongtrinhDaotaoSinhvien.aspx",
                    method: "GET"
                });
            })


        }
    }
}