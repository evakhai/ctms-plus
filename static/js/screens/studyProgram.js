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
            
            let titleTable = makeTree("div", "studyProgram", {
                table: {
                    tag: "table",
                    class: ["generalTable", "noBackground"],
                    child: {
                        thead: {
                            tag: "thead",
                            child: {
                                row: {
                                    tag: "tr",
                                    child: {
                                        sttColumn1: { tag: "th", class: "left", text: "Thứ tự" },
                                        sttColumn2: { tag: "th", class: "left", text: "Thứ tự "}
                                    },
                                }
                            },
                        },
                        tbody: { tag: "tbody" }
                    }
                }
            });

            screen.content = titleTable;
        },
    }
}