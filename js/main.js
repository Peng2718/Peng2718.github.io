
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

        // 技能条动画（仅执行一次）
        let skillsAnimated = false; // 标记是否已执行动画

        function animateSkills() {
            if (skillsAnimated) return; // 已执行则直接返回
            
            const skillsSection = document.getElementById('skills');
            const skillsTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // 当技能区域进入视口80%时执行动画
            if (skillsTop < windowHeight * 0.8) {
                document.querySelectorAll('.skill-progress').forEach(progress => {
                    // 获取目标宽度（从元素的data属性或style中读取）
                    const targetWidth = progress.getAttribute('data-width') || progress.style.width;
                    // 初始化宽度为0
                    progress.style.width = '0';
                    // 触发重排后设置目标宽度，实现过渡动画
                    setTimeout(() => {
                        progress.style.width = targetWidth;
                    }, 1200);
                });
                skillsAnimated = true; // 标记为已执行
            }
        }

        // 页面加载时检查一次
        window.addEventListener('load', animateSkills);
        // 滚动时检查（但仅执行一次）
        window.addEventListener('scroll', animateSkills);

        // 保留原页面加载完成的动画
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });

        // 查看更多按钮交互
        const moreInfoBtn = document.getElementById('moreInfoBtn');
        let infoExpanded = false;
        const originalDesc = document.querySelector('.profile-desc').textContent;
        const extendedDesc = originalDesc + '\n\n此外，我还积极参与开源社区Github，并在技术社区分享自己的开发经验。我始终相信，技术的价值在于解决实际问题，因此我会不断提升自己的技术能力，为创造更有价值的产品而努力。';

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
    