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
            
            makeTree("div", "studyProgram", {
                table: {
                    tag: "table",
                    class: ["generalTable", "noBackground"],
                    child: {
                        tag: "thead",
                        child: {
                            row: {
                                tag: "tr",
                                child: {
                                    stt: { tag: "th", class: "right", text: "Thứ tự" },
                                }
                            }
                        },
                        tbody: { tag: "tbody" }
                    }
                }
            });
        },

        onLogout() {
			this.reset();
			this.screen.overlay({
				icon: "exclamation",
				title: "Bạn Chưa Đăng Nhập",
				description: `Hãy đăng nhập vào CTMS để xem nội dung này!`,
				buttons: {
					login: { text: "ĐĂNG NHẬP", icon: "signin", onClick: () => core.account.clickable.active = true }
				}
			});

			this.screen.loading = false;
		},

		async load() {
			if (!core.account.loggedIn) {
				this.onLogout();
				return;
			}

			try {
				this.screen.loading = true;
				await api.results();
				this.screen.loading = false;
			} catch(e) {
				this.reset();
				this.screen.handleError(e, async () => await this.load());

				this.screen.loading = false;
			}
		},

        
    }
}