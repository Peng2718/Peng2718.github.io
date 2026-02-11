
        // 导航栏切换（移动端）
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        
        navToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // 移动端点击导航后关闭菜单
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                }
            });
        });

        // 技能条动画
        window.addEventListener('scroll', () => {
            const skillsSection = document.getElementById('skills');
            const skillsTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (skillsTop < windowHeight * 0.8) {
                document.querySelectorAll('.skill-progress').forEach(progress => {
                    const width = progress.style.width;
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 100);
                });
            }
        });

        // 查看更多按钮交互
        const moreInfoBtn = document.getElementById('moreInfoBtn');
        let infoExpanded = false;
        const originalDesc = document.querySelector('.profile-desc').textContent;
        const extendedDesc = originalDesc + '\n\n此外，我还积极参与开源社区的贡献，翻译国外优质技术文档，并在技术社区分享自己的开发经验。在业余时间，我也会参与一些技术沙龙和线上分享会，与同行交流学习，共同进步。我始终相信，技术的价值在于解决实际问题，因此我会不断提升自己的技术能力，为创造更有价值的产品而努力。';

        moreInfoBtn.addEventListener('click', () => {
            const descElement = document.querySelector('.profile-desc');
            if (!infoExpanded) {
                descElement.textContent = extendedDesc;
                moreInfoBtn.textContent = '收起更多';
                infoExpanded = true;
            } else {
                descElement.textContent = originalDesc;
                moreInfoBtn.textContent = '查看更多';
                infoExpanded = false;
            }
        });

        // 刷新状态按钮交互
        const updateBtn = document.getElementById('updateBtn');
        updateBtn.addEventListener('click', () => {
            const updateTime = document.querySelector('.update-time');
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            
            updateTime.textContent = `最后更新时间：${year}年${month}月${day}日 ${hours}:${minutes}`;
            
            // 按钮加载效果
            updateBtn.textContent = '已刷新';
            updateBtn.disabled = true;
            updateBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                updateBtn.textContent = '刷新最新状态';
                updateBtn.disabled = false;
                updateBtn.style.opacity = '1';
            }, 1500);
        });

        // 页面加载完成后的动画
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    