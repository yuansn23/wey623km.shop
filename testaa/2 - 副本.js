// 页面内容和文本
const pageContent = {
    pageTitle: "プロフェッショナルな投資コンサルティング",
    hero: {
        title: "私の1対1コンサルティングを受けてみませんか？",
        description: "投資の基礎知識を学びたいですか？私たちは無料の株式市場知識共有コースを提供し、市場の仕組みや基本的な投資概念を理解するお手伝いをします。現在、2万人以上の学生が学習に参加しています。",
        badge: "本日限定：残り200枠"
    },
    button: {
        addLine: "今すぐ私のLINEアカウントを追加",
        joinNow: "今すぐ参加する",
        floatingCta: "今すぐ私のLINEアカウントを追加"
    },
    course: {
        title: "コース内容",
        intro: "私が主催するこのコースでは、以下の内容を共有します：",
        features: [
            {
                title: "株式市場の基本概念の解析",
                text: "株式市場の仕組み、取引の基本、株価の形成メカニズムなど、初心者にも分かりやすく解説します。"
            },
            {
                title: "上場企業の基本的な分析方法",
                text: "財務諸表の読み方、企業価値の評価方法、投資判断に必要な指標など、実践的な分析スキルを学びます。"
            },
            {
                title: "市場の変動とリスク管理のポイント",
                text: "市場変動の要因、リスク管理の基本原則、長期投資における心理的バイアスの克服方法などを解説します。"
            }
        ]
    },
    info: {
        title: "重要なお知らせ",
        items: [
            "参加後、私の1対1コンサルティングサービスを受けることができます",
            "これは完全に無料の公共サービスコースであり、いつでも退会できます",
            "体系的な学習を通じて、専門的な市場知識のフレームワークを獲得できます"
        ]
    },
    footer: {
        title: " ",
        disclaimers: [
        ]
    },
    waitingForYou: "金融市場に興味をお持ちの方のご参加をお待ちしております。",
    imageUrl: "img/1.png",
    fallbackImageUrl: "img/1.png"
};

// 创建HTML结构
function renderPage() {
    // 设置页面标题
    document.title = pageContent.pageTitle;
    
    // 获取容器元素
    const appContainer = document.getElementById('app-container');
    
    // 创建完整的HTML结构
    const html = `
        <div class="wrapper">
            <section class="hero-block">
                <div class="hero-content">
                    <h1 class="hero-title">${pageContent.hero.title}</h1>
                    <p class="hero-description">${pageContent.hero.description.replace(/2万人以上/, '<span class="emphasis">2万人以上</span>')}</p>
                    <div class="counter-badge">${pageContent.hero.badge}</div>
                </div>
            </section>
            
            <section class="content-section">
                <div class="media-container">
                    <img src="${pageContent.imageUrl}" alt="投資コンサルティング" onerror="this.src='${pageContent.fallbackImageUrl}'">
                </div>
                
                <div class="cta-container">
                    <button class="cta-button" onclick="openkt()">${pageContent.button.addLine}</button>
                </div>
            </section>
            
            <section class="content-section">
                <h2 class="section-title">${pageContent.course.title}</h2>
                <p>${pageContent.course.intro}</p>
                
                ${pageContent.course.features.map(feature => `
                    <div class="feature-box">
                        <h3 class="feature-title">${feature.title}</h3>
                        <p class="feature-text">${feature.text}</p>
                    </div>
                `).join('')}
            </section>
            
            <section class="content-section">
                <div class="info-box">
                    <h3 class="info-title">${pageContent.info.title}</h3>
                    <ul>
                        ${pageContent.info.items.map(item => `
                            <li>${item.replace(/私の1対1コンサルティングサービス/, '<span class="highlight">私の1対1コンサルティングサービス</span>')}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="cta-container">
                    <button class="cta-button" onclick="openkt()">${pageContent.button.joinNow}</button>
                </div>
                
                <p style="text-align: center; margin-top: 20px;">${pageContent.waitingForYou}</p>
            </section>
            
            <footer class="footer-disclaimer">
                <h3 class="disclaimer-title">${pageContent.footer.title}</h3>
                ${pageContent.footer.disclaimers.map(text => `<p>${text}</p>`).join('')}
            </footer>
        </div>
        
        <button class="cta-button floating-cta pulse-animation" onclick="openkt()">${pageContent.button.floatingCta}</button>
    `;
    
    // 设置HTML内容
    appContainer.innerHTML = html;
    
    console.log("ページの描画が完了しました");
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', renderPage);