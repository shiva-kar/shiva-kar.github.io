<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuantumBlaze | Unity Developer Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Outfit:wght@300;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --primary: #8A2BE2; /* Your signature purple */
            --primary-glow: rgba(138, 43, 226, 0.5);
            --bg-dark: #0a0a0f;
            --bg-card: #13131f;
            --text-main: #e0e0e0;
            --text-muted: #a0a0a0;
            --border: #2a2a35;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(138, 43, 226, 0.08) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(138, 43, 226, 0.08) 0%, transparent 20%);
        }

        /* Typography */
        h1, h2, h3 {
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2rem;
            border-bottom: 2px solid var(--primary);
            display: inline-block;
            margin-bottom: 2rem;
            padding-bottom: 0.5rem;
        }

        .subtitle {
            color: var(--text-muted);
            font-style: italic;
        }

        code, .mono {
            font-family: 'Fira Code', monospace;
        }

        a {
            text-decoration: none;
            color: var(--primary);
            transition: 0.3s;
        }

        a:hover {
            color: #fff;
            text-shadow: 0 0 10px var(--primary);
        }

        /* Layout Containers */
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            padding: 4rem 0;
        }

        /* Header Section */
        header {
            text-align: center;
            position: relative;
            padding-bottom: 2rem;
        }

        .header-waves img {
            width: 100%;
            display: block;
        }

        .typing-svg {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
            filter: drop-shadow(0 0 10px var(--primary-glow));
        }

        /* Social Badges */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }

        .social-links img {
            height: 30px;
            transition: transform 0.2s;
        }

        .social-links a:hover img {
            transform: translateY(-3px);
        }

        /* Cards & Grids */
        .grid-2 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            padding: 2rem;
            border-radius: 16px;
            transition: 0.3s;
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 4px;
            background: linear-gradient(90deg, var(--primary), transparent);
            opacity: 0;
            transition: 0.3s;
        }

        .card:hover::before {
            opacity: 1;
        }

        /* Tech Stack Section */
        .tech-category {
            margin-bottom: 2rem;
        }
        
        .tech-category h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--text-muted);
        }

        .badge-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .badge-container img {
            height: 28px;
            border-radius: 4px;
        }

        /* GitHub Stats */
        .stats-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }
        
        .stats-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        .stats-img {
            max-width: 100%;
            height: auto;
        }

        /* Journey Table to Grid */
        .journey-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .journey-item h3 {
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .journey-item ul {
            list-style: none;
        }

        .journey-item li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .journey-item li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--primary);
        }

        /* Projects */
        .project-card h4 {
            color: #fff;
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
        }

        .project-tags {
            display: flex;
            gap: 0.5rem;
            margin: 1rem 0;
            font-size: 0.85rem;
        }

        .tag {
            background: rgba(138, 43, 226, 0.2);
            color: #d8b4fe;
            padding: 2px 8px;
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
        }

        /* Personal Trivia Table */
        .trivia-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
        }

        .trivia-table th {
            color: var(--text-muted);
            font-weight: 400;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid var(--border);
        }

        .trivia-table td {
            font-weight: 700;
            color: white;
            padding: 10px;
        }

        /* Footer */
        footer {
            text-align: center;
            padding-bottom: 4rem;
            position: relative;
        }

        .footer-content {
            margin-top: -40px; /* Pull up over the wave */
            position: relative;
            z-index: 10;
        }

        blockquote {
            border-left: 4px solid var(--primary);
            padding-left: 1rem;
            margin: 2rem auto;
            max-width: 600px;
            font-style: italic;
            color: var(--text-muted);
        }

        /* Utility */
        .center { text-align: center; }
        .mb-2 { margin-bottom: 2rem; }

        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
            animation: fadeIn 0.8s ease-out forwards;
        }

    </style>
</head>
<body>

    <header>
        <div class="container animate-in">
            <br><br>
            <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=45&duration=4000&pause=1000&color=8A2BE2&center=true&vCenter=true&width=700&height=80&lines=Hello+World!+👋;🔥+I'm+Shiva+aka+QuantumBlaze+🚀;Unity+Developer+🎮;Passionate+Coder+💻" alt="Typing Animation" class="typing-svg" />
            
            <div class="header-waves">
                <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=header&animation=fadeIn&fontAlign=70" alt="Wave">
            </div>

            <h1 style="font-size: 3rem; margin-top: 1rem;">🌟 QuantumBlazeGames 🌟</h1>
            <h3 class="subtitle">"Crafting Digital Worlds, One Line at a Time"</h3>

            <div class="social-links">
                <a href="https://github.com/QuantumBlazeGames" target="_blank">
                    <img src="https://img.shields.io/github/followers/QuantumBlazeGames?style=social" alt="Followers">
                </a>
                <a href="https://github.com/QuantumBlazeGames" target="_blank">
                    <img src="https://komarev.com/ghpvc/?username=QuantumBlazeGames&color=8A2BE2&style=flat-square" alt="Visitors">
                </a>
                <a href="https://github.com/QuantumBlazeGames" target="_blank">
                    <img src="https://img.shields.io/github/stars/QuantumBlazeGames?style=social" alt="Stars">
                </a>
            </div>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <h2 class="center">🎮 About Me</h2>
            
            <div class="grid-2">
                <div class="card">
                    <h3>🎯 Developer Profile</h3>
                    <p><strong>Name:</strong> Shiva Kar</p>
                    <p><strong>Title:</strong> Unity Developer & Software Engineer</p>
                    <p><strong>Mission:</strong> Creating immersive gaming experiences</p>
                    <p><strong>Philosophy:</strong> Code with purpose, build with passion</p>
                    <br>
                    <blockquote>
                        "Turning creative visions into interactive realities!" <br>
                        Always learning, always growing!
                    </blockquote>
                </div>

                <div class="card">
                    <h3>🛠️ Skills & Expertise</h3>
                    <p><strong>Languages:</strong> C#, Python, C++, Java, JavaScript</p>
                    <p><strong>Engines:</strong> Unity (Primary), Unreal Engine, Godot</p>
                    <p><strong>Tools:</strong> Git, VS Code, JetBrains Rider, Blender</p>
                    <p><strong>Interests:</strong> Game Dev, AI/ML, VR/AR, Open Source, Cyber Security</p>
                </div>
            </div>
        </div>
    </section>

    <section id="tech" style="background: rgba(255,255,255,0.02);">
        <div class="container">
            <h2 class="center">🛠️ Tech Stack & Superpowers</h2>
            
            <div class="grid-2">
                <div class="tech-category">
                    <h3>💻 Programming Languages</h3>
                    <div class="badge-container">
                        <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#">
                        <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
                        <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C">
                        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java">
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS">
                    </div>
                </div>

                <div class="tech-category">
                    <h3>🎮 Game Development</h3>
                    <div class="badge-container">
                        <img src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity">
                        <img src="https://img.shields.io/badge/Unreal_Engine-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white" alt="UE5">
                        <img src="https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=godot-engine&logoColor=white" alt="Godot">
                        <img src="https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white" alt="Blender">
                    </div>
                </div>

                <div class="tech-category">
                    <h3>🌐 Web Technologies</h3>
                    <div class="badge-container">
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node">
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
                    </div>
                </div>

                <div class="tech-category">
                    <h3>🛠️ Tools & Platforms</h3>
                    <div class="badge-container">
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
                        <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux">
                        <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stats">
        <div class="container center">
            <h2>📊 GitHub Analytics</h2>
            <div class="stats-grid">
                <div class="stats-row">
                    <img class="stats-img" src="https://github-readme-stats.vercel.app/api?username=QuantumBlazeGames&show_icons=true&theme=radical&hide_border=true" alt="Stats">
                    <img class="stats-img" src="https://github-readme-stats.vercel.app/api/top-langs/?username=QuantumBlazeGames&layout=compact&theme=radical&hide_border=true" alt="Langs">
                </div>
                <div class="stats-row">
                    <img class="stats-img" src="https://github-readme-streak-stats.herokuapp.com/?user=QuantumBlazeGames&theme=radical&hide_border=true" alt="Streak">
                </div>
                <div class="stats-row" style="width: 100%;">
                    <img class="stats-img" style="width: 100%;" src="https://github-readme-activity-graph.vercel.app/graph?username=QuantumBlazeGames&theme=react-dark&hide_border=true&color=8A2BE2&line=8A2BE2&point=FFFFFF" alt="Activity">
                </div>
            </div>
        </div>
    </section>

    <section id="journey">
        <div class="container">
            <h2 class="center">🎯 Current Journey</h2>
            <div class="card">
                <div class="journey-grid">
                    <div class="journey-item">
                        <h3>🔭 Working On</h3>
                        <ul>
                            <li>Next-Gen Game Projects</li>
                            <li>Performance Optimization</li>
                            <li>Interactive Web Experiences</li>
                            <li>AI Integration in Games</li>
                        </ul>
                    </div>
                    <div class="journey-item">
                        <h3>🌱 Learning</h3>
                        <ul>
                            <li>Advanced Unity Architecture</li>
                            <li>Unity DOTS & ECS</li>
                            <li>Machine Learning for Games</li>
                            <li>Shader Graph Mastery</li>
                        </ul>
                    </div>
                    <div class="journey-item">
                        <h3>👯 Collaborating On</h3>
                        <ul>
                            <li>Open Source Projects</li>
                            <li>Sustainability Tech</li>
                            <li>Game Jams & Hackathons</li>
                            <li>Innovative Startups</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2 class="center">🏆 Featured Projects</h2>
            
            <div class="card center" style="padding: 4rem 2rem;">
                <i class="fas fa-code-branch" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                <h3>🚀 Projects Loading...</h3>
                <p style="color: var(--text-muted);">
                    Exciting Unity projects are currently in the works.<br>
                    Check back soon for new gameplay showcases and code breakdowns!
                </p>
                <br>
                <a href="https://github.com/QuantumBlazeGames" style="border: 1px solid var(--primary); padding: 0.5rem 1.5rem; border-radius: 50px;">View GitHub Repositories</a>
            </div>

        </div>
    </section>

    <section id="personal" style="background: rgba(255,255,255,0.02);">
        <div class="container">
            <h2 class="center">🎪 Beyond Code</h2>
            
            <div class="grid-2">
                <div class="card">
                    <h3>🌟 Personal Trivia</h3>
                    <table class="trivia-table">
                        <tr><th>😄 Pronouns</th><td>He/Him</td></tr>
                        <tr><th>📍 Location</th><td>Digital Nomad</td></tr>
                        <tr><th>🎯 Focus</th><td>Game Innovation</td></tr>
                        <tr><th>🌟 Status</th><td>Open to Work</td></tr>
                    </table>
                </div>
                <div class="card">
                    <h3>⚡ Fun Facts</h3>
                    <p><strong>🏞️ Adventure:</strong> Explored 15+ national parks.</p>
                    <p><strong>🎮 Origin:</strong> Started coding to build games.</p>
                    <p><strong>📚 Reading:</strong> The Three-Body Problem.</p>
                    <p><strong>🎯 Talent:</strong> Rubik's cube < 2 mins.</p>
                    <p><strong>💡 Quote:</strong> "The best way to predict the future is to invent it." - Alan Kay</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer&animation=fadeIn" style="width:100%;" alt="Wave Footer">
        
        <div class="container footer-content">
            <h3>🚀 Ready to Create Magic Together?</h3>
            <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60" alt="Rocket">
            
            <blockquote>
                "Great things in business are never done by one person. They're done by a team of people." - Steve Jobs
            </blockquote>

            <div class="social-links mb-2">
                <a href="mailto:shivakaryt@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
                <a href="#"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
                <a href="#"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
                <a href="#"><img src="https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itch.io&logoColor=white" alt="Itch"></a>
            </div>

            <div class="mb-2">
                <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-QuantumBlazeGames-8A2BE2?style=for-the-badge" alt="Made with love">
            </div>
            
            <p style="color: var(--text-muted); font-size: 0.9rem;">Last updated: 2025 • Keep coding, keep creating! 🌟</p>
        </div>
    </footer>

</body>
</html>
