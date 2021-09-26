export default function CardJSON() {
    return JSON.parse(JSON.stringify([
        {
            img_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Simple_Periodic_Table_Chart-blocks.svg/1200px-Simple_Periodic_Table_Chart-blocks.svg.png",
            text: 'MCQ Periodic Table Quiz, Randomly generated 10 questions.',
            label: 'Chemistry-Quiz',
            deploy: '/quiz-science-hhw'
        },
        {
            img_src: "https://socialify.git.ci/gamer-1478/cpu-benchmark/image?description=1&font=Raleway&issues=1&language=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark",
            text: 'Cpu-Benchmark',
            label: 'Python-Project',
            deploy: 'https://github.com/gamer-1478/cpu-benchmark/blob/main/bench.py',
            source: 'https://github.com/gamer-1478/cpu-benchmark'
        },
        {
            img_src: "https://www.researchgate.net/publication/327714444/figure/fig3/AS:672028931653638@1537235591748/Robotic-platform-used-in-this-study-a-Original-design-of-the-InMoov-robot-and-b.ppm",
            text: 'Cybortics-Humanoid',
            label: 'Robotics Project',
            path: '/cybortics-humanoid'
        },
        {
            img_src: "https://socialify.git.ci/gamer-1478/ai-dsm/image?description=1&font=Raleway&issues=1&language=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark",
            text: 'Online Simulated A.I. For A Simulated Home',
            label: 'AI Project',
            deploy: '/ai-dsm',
            source: 'https://github.com/gamer-1478/ai-dsm'

        }
    ]))
}
