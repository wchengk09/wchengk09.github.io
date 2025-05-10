const moodLimit = 256;
let debugmode = !1
  , timePoints = 24
  , mood = 10
  , currentProblem = 1
  , totalProblems = 0
  , remainingPoints = 15
  , remainingAbilityPoints = 10
  , currentContestName = "NOIP普及组"
  , playerStats = {
    dp: 0,
    ds: 0,
    string: 0,
    graph: 0,
    combinatorics: 0,
    geometry: 0,
    linearalgebra: 0,
    calculus: 0,
    numerical: 0,
    probability: 0,
    complexanalysis: 0,
    linearprogramming: 0,
    constant: 0,
    matroid: 0,
    thinking: 0,
    coding: 0,
    carefulness: 0,
    determination: 500,
    quickness: 0,
    mental: 0,
    culture: 0,
    experience: 0,
    isProvincialTeamA: !1,
    cspScore: 0,
    noipScore: 0,
    prevScore: 0,
    isProvincialTeam: !1,
    prevScore1: 0,
    prevScore2: 0,
    prevScore3: 0,
    noiScore0: 0,
    isTrainingTeam: !1,
    isCandidateTeam: !1,
    isNationalTeam: !1,
    isIOIgold: !1,
    isIOIchampion: !1,
    tempScore: 0,
    achievements: [],
    extraMoodDrop: 0,
    isUOJAdmin: !1,
    isLOJAdmin: !1,
    isCodeforcesAdmin: !1,
    isAtcoderAdmin: !1,
    isVJudgeAdmin: !1,
    isQOJAdmin: !1,
    isUCupAdmin: !1,
    isPjudgeAdmin: !1,
    isLuoguAdmin: !1,
    crypto: 0
};
const contestConfigs = {
    1: {
        name: "CSP-S",
        problemRanges: [{
            minLevel: 1,
            maxLevel: 3
        }, {
            minLevel: 2,
            maxLevel: 4
        }, {
            minLevel: 3,
            maxLevel: 5
        }, {
            minLevel: 3,
            maxLevel: 6
        }],
        timePoints: 24
    },
    2: {
        name: "NOIP",
        problemRanges: [{
            minLevel: 2,
            maxLevel: 4
        }, {
            minLevel: 3,
            maxLevel: 4
        }, {
            minLevel: 4,
            maxLevel: 6
        }, {
            minLevel: 5,
            maxLevel: 7
        }],
        timePoints: 27
    },
    3: {
        name: "WC",
        problemRanges: [{
            minLevel: 3,
            maxLevel: 6
        }, {
            minLevel: 6,
            maxLevel: 8
        }, {
            minLevel: 8,
            maxLevel: 10
        }],
        timePoints: 30
    },
    4: {
        name: "省选Day1",
        problemRanges: [{
            minLevel: 4,
            maxLevel: 5
        }, {
            minLevel: 6,
            maxLevel: 7
        }, {
            minLevel: 7,
            maxLevel: 9
        }],
        timePoints: 27
    },
    5: {
        name: "省选Day2",
        problemRanges: [{
            minLevel: 4,
            maxLevel: 6
        }, {
            minLevel: 6,
            maxLevel: 7
        }, {
            minLevel: 7,
            maxLevel: 9
        }],
        timePoints: 27
    },
    6: {
        name: "APIO",
        problemRanges: [{
            minLevel: 4,
            maxLevel: 9
        }, {
            minLevel: 4,
            maxLevel: 9
        }, {
            minLevel: 4,
            maxLevel: 9
        }],
        timePoints: 30,
        isIOI: !0
    },
    7: {
        name: "NOI Day1",
        problemRanges: [{
            minLevel: 5,
            maxLevel: 7
        }, {
            minLevel: 6,
            maxLevel: 8
        }, {
            minLevel: 8,
            maxLevel: 10
        }],
        timePoints: 30
    },
    8: {
        name: "NOI Day2",
        problemRanges: [{
            minLevel: 5,
            maxLevel: 7
        }, {
            minLevel: 6,
            maxLevel: 9
        }, {
            minLevel: 8,
            maxLevel: 11
        }],
        timePoints: 30
    },
    9: {
        name: "CTT Day1",
        problemRanges: [{
            minLevel: 8,
            maxLevel: 11
        }, {
            minLevel: 7,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 11
        }],
        timePoints: 30,
        isIOI: !0
    },
    10: {
        name: "CTT Day2",
        problemRanges: [{
            minLevel: 7,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 11
        }, {
            minLevel: 7,
            maxLevel: 11
        }],
        timePoints: 30,
        isIOI: !0
    },
    11: {
        name: "CTT Day3",
        problemRanges: [{
            minLevel: 8,
            maxLevel: 11
        }, {
            minLevel: 7,
            maxLevel: 11
        }, {
            minLevel: 7,
            maxLevel: 11
        }],
        timePoints: 30,
        isIOI: !0
    },
    12: {
        name: "CTT Day4",
        problemRanges: [{
            minLevel: 8,
            maxLevel: 11
        }, {
            minLevel: 7,
            maxLevel: 11
        }, {
            minLevel: 8,
            maxLevel: 11
        }],
        timePoints: 30,
        isIOI: !0
    },
    13: {
        name: "CTS Day1",
        problemRanges: [{
            minLevel: 10,
            maxLevel: 12
        }, {
            minLevel: 11,
            maxLevel: 12
        }, {
            minLevel: 10,
            maxLevel: 12
        }],
        timePoints: 30,
        isIOI: !0
    },
    14: {
        name: "CTS Day2",
        problemRanges: [{
            minLevel: 10,
            maxLevel: 12
        }, {
            minLevel: 11,
            maxLevel: 12
        }, {
            minLevel: 10,
            maxLevel: 12
        }],
        timePoints: 30,
        isIOI: !0
    },
    15: {
        name: "IOI Day1",
        problemRanges: [{
            minLevel: 8,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 12
        }],
        timePoints: 30,
        isIOI: !0
    },
    16: {
        name: "IOI Day2",
        problemRanges: [{
            minLevel: 8,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 10
        }, {
            minLevel: 8,
            maxLevel: 12
        }],
        timePoints: 30,
        isIOI: !0
    },
    101: {
        name: "NOI Day0",
        problemRanges: [{
            minLevel: 1e3,
            maxLevel: 1e3
        }],
        timePoints: 3,
        isIOI: !0
    }
};
function selectProblemFromRange(e, t) {
    let n = [];
    for (let r = e; r <= t; r++)
        problemPoolByLevel[r] && (n = n.concat(problemPoolByLevel[r].map(e => ({
            ...e,
            level: r
        }))));
    let a = n[Math.floor(Math.random() * n.length)];
    return a
}
function createSubmitAnswerProblem(e) {
    return {
        name: "提交答案题",
        isSubmitAnswer: !0,
        level: e,
        parts: [{
            score: 0,
            thinking: 0,
            coding: 0,
            dp: 0,
            ds: 0,
            adhoc: 0,
            inspire: 0,
            blur: 0
        }]
    }
}
function selectIOIProblemFromRange(e, t, n) {
    let r = [];
    for (let a = e; a <= t; a++)
        problemPoolByLevel[a] && (r = r.concat(problemPoolByLevel[a].map(e => ({
            ...e,
            level: a
        }))));
    let o = r[Math.floor(Math.random() * r.length)]
      , s = JSON.parse(JSON.stringify(o));
    if (s && s.parts)
        for (let i = 0; i < s.parts.length; i++) {
            let l = s.parts[i];
            l.ds && l.ds > 5 && (l.coding ? (l.coding += (l.ds - 5) / 2,
            l.thinking += (l.ds - 5) / 2) : (l.coding = (l.ds - 5) / 2,
            l.thinking += (l.ds - 5) / 2),
            l.ds = 5),
            l.combinatorics && l.combinatorics > 5 && (l.construction ? l.construction += l.combinatorics : l.construction = l.combinatorics,
            l.thinking += l.combinatorics,
            l.combinatorics = 0),
            l.polynomial && l.polynomial > 0 && (l.thinking += l.polynomial,
            l.polynomial = 0),
            l.string && l.string > 0 && (l.dp += l.string,
            l.string = 0),
            l.gametheory && l.gametheory > 0 && (l.construction ? l.construction += l.gametheory : l.construction = l.gametheory,
            l.thinking += l.gametheory,
            l.gametheory = 0),
            l.thinking += e
        }
    return n && s.parts.length > n ? {
        ...s,
        parts: s.parts.slice(0, n)
    } : s
}
function startNOIPTest() {
    document.getElementById("start-screen").style.display = "none",
    document.getElementById("pre-story-panel").style.display = "block",
    document.getElementById("log-panel").style.display = "none",
    document.getElementById("pre-story-title").textContent = "NOIP测试模式",
    document.getElementById("pre-story-content").innerHTML = `
              <p>欢迎进入NOIP测试模式！</p>
              <p>这是一个简化的测试版本，你可以快速体验游戏的核心玩法。</p>
              <p>你将直接进入NOIP普及组比赛，体验完整的比赛流程。</p>
              <p>现在，你需要分配你的天赋点，为比赛做好准备。</p>
          `,
    timePoints = 24,
    mood = 10,
    currentProblem = 1,
    totalProblems = 0,
    remainingPoints = 15,
    remainingAbilityPoints = 10,
    currentContestName = "NOIP普及组",
    playerStats = {
        dp: 0,
        ds: 0,
        string: 0,
        graph: 0,
        combinatorics: 0,
        geometry: 0,
        linearalgebra: 0,
        calculus: 0,
        numerical: 0,
        probability: 0,
        complexanalysis: 0,
        linearprogramming: 0,
        constant: 0,
        matroid: 0,
        thinking: 0,
        coding: 0,
        carefulness: 0,
        experience: 0,
        determination: 500,
        achievements: []
    },
    currentShopPrices = {
        思维提升: 200,
        代码提升: 200,
        细心提升: 200,
        随机提升: 150,
        心态恢复: 500,
        全面提升: 1e3,
        速度提升: 1e3,
        心理素质提升: 1e3,
        经验提升: 1e3
    },
    gameLog = [],
    document.getElementById("log").innerHTML = ""
}
let problems = []
  , subProblems = []
  , thinkProgress = []
  , codeProgress = []
  , isCodeComplete = []
  , errorRates = []
  , hasCheckedSubProblem = []
  , gameLog = [];
const shopPriceIncrements = {
    easy: {
        思维提升: 200,
        代码提升: 200,
        细心提升: 200,
        随机提升: 200,
        心态恢复: 200,
        全面提升: 500,
        经验提升: 500,
        速度提升: 1e3,
        心理素质提升: 1e3
    },
    normal: {
        思维提升: 300,
        代码提升: 300,
        细心提升: 300,
        随机提升: 300,
        心态恢复: 200,
        全面提升: 500,
        经验提升: 500,
        速度提升: 1e3,
        心理素质提升: 1500
    },
    hard: {
        思维提升: 500,
        代码提升: 500,
        细心提升: 500,
        随机提升: 500,
        心态恢复: 200,
        全面提升: 1e3,
        经验提升: 1e3,
        速度提升: 1500,
        心理素质提升: 2e3
    },
    expert: {
        思维提升: 500,
        代码提升: 500,
        细心提升: 500,
        随机提升: 500,
        心态恢复: 500,
        全面提升: 1e3,
        经验提升: 1e3,
        速度提升: 2500,
        心理素质提升: 2500
    }
};
let currentShopPrices = {
    思维提升: 500,
    代码提升: 500,
    细心提升: 500,
    随机提升: 500,
    心态恢复: 500,
    全面提升: 1e3,
    速度提升: 2500,
    心理素质提升: 2500,
    经验提升: 2500
};
const eventSystem = {
    training: {
        偷学: {
            title: "偷学",
            description: "在其他人摸鱼摆烂的时候，你却在偷偷学习。这样的学习方式也许会带来一些效果？你其实并不知道，你只是觉得在其他人休息的时候学习，会更有动力。这也是你引以为傲的一点。",
            options: [{
                text: "偷学被同学发现，被迫中断学习",
                effects: {
                    mood: +1
                }
            }, {
                text: "偷学了一些线性代数",
                effects: {
                    linearalgebra: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些微积分",
                effects: {
                    calculus: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些数值方法",
                effects: {
                    numerical: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些概率论",
                effects: {
                    probability: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些复分析",
                effects: {
                    complexanalysis: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些线性规划",
                effects: {
                    linearprogramming: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些常数优化",
                effects: {
                    constant: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些计算几何",
                effects: {
                    geometry: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些字符串",
                effects: {
                    string: 1,
                    mood: +1
                }
            }, {
                text: "偷学了一些文化课",
                effects: {
                    culture: 1,
                    mood: +1
                }
            }],
            optionsToShow: 1
        },
        休息: {
            title: "休息",
            description: "竞赛生的生活非常忙碌，适当的休息也许可以让你更好地调整心态，迎接接下来的挑战。你期待着有个好梦，便躺在了床上。",
            options: [{
                text: "在床上躺着使你感到非常舒适，你很快就睡着了，至于虚幻的梦你醒来时已经记不清了",
                effects: {
                    mood: 2
                }
            }, {
                text: "在床上躺着使你感到非常舒适，你很快就睡着了，至于虚幻的梦你醒来时已经记不清了",
                effects: {
                    mood: 1
                }
            }, {
                text: "在梦里你梦到了很多：喜欢的女孩，曾经的老友，还有你那未完成的梦想",
                effects: {
                    determination: 500
                }
            }, {
                text: "在梦里你梦到了很多：喜欢的女孩，曾经的老友，还有你那未完成的梦想",
                effects: {
                    determination: 1e3
                }
            }, {
                text: "渐入梦境之时，你带上了你所有的决心……",
                effects: {
                    determination: 1e3
                },
                nextEvent: "决心商店"
            }, {
                text: "渐入梦境之时，你带上了你所有的决心……",
                effects: {
                    determination: 500
                },
                nextEvent: "决心商店"
            }, {
                text: "渐入梦境之时，你带上了你所有的决心……",
                effects: {},
                nextEvent: "决心商店"
            }, {
                text: "你被楼下的七八岁的小孩吵的无法安然入睡，这让你感到更加烦躁",
                effects: {
                    mood: +1
                }
            }, {
                text: "你做了恐怖的噩梦，感到更焦虑了，这让你感到更加烦躁",
                effects: {
                    mood: +2
                }
            }],
            optionsToShow: 1
        },
        打隔膜: {
            title: "打隔膜",
            description: "竞赛生的快乐来源之一，当然是打隔膜。你和你的朋友们一起在机房打隔膜，在享受着游戏的乐趣的同时，又要避开教练的视线——你的学长曾因为在机房打隔膜被教练抓到，然后被罚写检讨并被轰出了机房。",
            options: [{
                text: "轻轻松松带飞全场，你感受到了游戏带来的快感",
                effects: {
                    mood: 3
                }
            }, {
                text: "游戏的时光让你忘记了烦恼，重新燃起了斗志",
                effects: {
                    mood: 2
                }
            }, {
                text: "经过激烈的厮杀后，勉强获胜——这确实缓解了一些压力",
                effects: {
                    mood: 1
                }
            }, {
                text: "打隔膜给你带来了必胜的决心：我在 OI 上也一定会赢！",
                effects: {
                    determination: 1e3
                }
            }, {
                text: "被对面虐，心态爆炸。连开了五把却怎么都赢不了，你开始怀疑自己的实力",
                effects: {
                    mood: +1
                }
            }, {
                text: "你在打隔膜时候被抓，跟学长一样地，被罚写检讨并被轰出了机房",
                effects: {
                    mood: +2
                }
            }],
            optionsToShow: 1
        },
        摸鱼: {
            title: "摸鱼",
            description: "日常训练给你带来了巨大的压力，你决定在训练期间暂时放松一下，舒缓一下心情。总不会真的有学习机器，连摸鱼的时间都没有吧？",
            options: [{
                text: "刷了会手机，时间就过去了",
                effects: {}
            }, {
                text: "去床上休息一下，缓解一下压力",
                effects: {},
                nextEvent: "休息"
            }, {
                text: "朋友都在旁边：为什么不一起打隔膜？",
                effects: {},
                nextEvent: "打隔膜"
            }],
            optionsToShow: 3
        },
        出游: {
            title: "出游",
            description: "竞赛生都是一些死宅，即使有空的时间也都是待在机房里。然而机房的气氛确实比较压抑，而且平时你也没有时间出去走走，那为什么不去感受一下外面的世界呢？",
            options: [{
                text: "你偶然遇上黄昏和晚霞：在另一个我不学 OI 的世界里，我此时会在做什么？",
                effects: {
                    mood: +1
                }
            }, {
                text: "你在湖边的咖啡厅遇到了一位学长，你回心转意决定跟他学习一会",
                effects: {},
                nextEvent: "偷学"
            }, {
                text: "原本只想开开心心地溜达，怎料天下大雨，你被淋成了落汤鸡",
                effects: {
                    mood: +2
                }
            }, {
                text: "后来你才知道：生活不只眼前的 OI，还有诗和远方",
                effects: {
                    mood: 1
                }
            }],
            optionsToShow: 1
        },
        遗忘: {
            title: "遗忘",
            description: "一些知识总会在不知不觉中遗忘，就如同历史的长河终究会把你我淹没。——希望大家一直记得我，希望大家永远忘了我。",
            options: [{
                text: "忘记动态规划",
                effects: {
                    dp: +2
                }
            }, {
                text: "忘记数据结构",
                effects: {
                    ds: +2
                }
            }, {
                text: "忘记字符串",
                effects: {
                    string: +2
                }
            }, {
                text: "忘记图论",
                effects: {
                    graph: +2
                }
            }, {
                text: "忘记组合计数",
                effects: {
                    combinatorics: +2
                }
            }, {
                text: "忘记计算几何",
                effects: {
                    geometry: +2
                }
            }, {
                text: "忘记线性代数",
                effects: {
                    linearalgebra: +2
                }
            }, {
                text: "忘记数论",
                effects: {
                    numbertheory: +2
                }
            }, {
                text: "忘记博弈论",
                effects: {
                    gametheory: +2
                }
            }, {
                text: "忘记构造",
                effects: {
                    construction: +2
                }
            }, {
                text: "忘记多项式",
                effects: {
                    polynomial: +2
                }
            }, {
                text: "忘记数学",
                effects: {
                    linearalgebra: +2,
                    combinatorics: +2,
                    numbertheory: +2,
                    polynomial: +2,
                    gametheory: +2,
                    calculus: +2,
                    numerical: +2,
                    probability: +2,
                    complexanalysis: +2,
                    linearprogramming: +2
                }
            }, {
                text: "忘记文化课",
                effects: {
                    culture: +2
                }
            }, {
                text: "忘记怎么写代码",
                effects: {
                    coding: +1
                }
            }, {
                text: "忘记如何管理情绪",
                effects: {
                    mental: +1
                }
            }, {
                text: "忘记所有",
                effects: {
                    dp: +1,
                    ds: +1,
                    string: +1,
                    graph: +1,
                    combinatorics: +1,
                    geometry: +1,
                    linearalgebra: +1,
                    numbertheory: +1,
                    gametheory: +1,
                    construction: +1,
                    polynomial: +1,
                    culture: +1
                }
            }],
            optionsToShow: 3
        },
        焦虑: {
            title: "焦虑",
            description: "长期的高压生活，你总会陷入焦虑。一次次的挫折后，你开始怀疑自己是否真的适合 OI，是否真的有天赋。你觉得自己不再是三年前那个充满梦想和决心的自己了。但是走到这一步，你已经没有退路了。",
            options: [{
                text: "有时候你开始思考人生的意义：我到底在追求什么？——可惜你找不到答案",
                effects: {
                    mood: +2
                }
            }, {
                text: "你开始轻微抑郁，你总觉得自己的努力没有意义，但也没有解决的办法，只能反复内耗",
                effects: {
                    mood: +3
                }
            }, {
                text: "在焦虑中，你开始选择遗忘，选择逃避，选择放弃",
                effects: {},
                nextEvent: "遗忘"
            }, {
                text: "你在一次次的焦虑中，变得更没有底气和决心",
                effects: {
                    determination: +500
                }
            }],
            optionsToShow: 2
        },
        长期训练: {
            title: "长期训练",
            description: "你很幸运地进入到了最好的高中，这里有着最好的师资力量，最好的学习氛围，最好的竞赛氛围。你开始进行长期训练，水平很快得到了提升。",
            options: [{
                text: "综合训练",
                effects: {
                    dp: 1,
                    ds: 1,
                    string: 1,
                    graph: 1,
                    combinatorics: 1,
                    geometry: 1,
                    linearalgebra: 1,
                    gametheory: 1,
                    construction: 1,
                    polynomial: 1,
                    numbertheory: 1,
                    calculus: 1,
                    matroid: 1,
                    numerical: 1,
                    complexanalysis: 1,
                    linearprogramming: 1,
                    crypto: 1
                }
            }, {
                text: "动态规划专项训练",
                effects: {
                    dp: 6
                }
            }, {
                text: "数据结构专项训练",
                effects: {
                    ds: 6
                }
            }, {
                text: "字符串专项训练",
                effects: {
                    string: 6
                }
            }, {
                text: "图论专项训练",
                effects: {
                    graph: 6
                }
            }, {
                text: "计算几何专项训练",
                effects: {
                    geometry: 4,
                    ds: 2
                }
            }, {
                text: "多项式专项训练",
                effects: {
                    polynomial: 8
                }
            }, {
                text: "数论专项训练",
                effects: {
                    numbertheory: 8
                }
            }, {
                text: "博弈论专项训练",
                effects: {
                    gametheory: 8
                }
            }, {
                text: "构造专项训练",
                effects: {
                    construction: 8
                }
            }, {
                text: "线性规划专项训练",
                effects: {
                    linearprogramming: 8
                }
            }, {
                text: "概率论专项训练",
                effects: {
                    probability: 8
                }
            }, {
                text: "复分析专项训练",
                effects: {
                    complexanalysis: 8
                }
            }, {
                text: "数值方法专项训练",
                effects: {
                    numerical: 8
                }
            }, {
                text: "微积分专项训练",
                effects: {
                    calculus: 8
                }
            }, {
                text: "拟阵专项训练",
                effects: {
                    matroid: 8
                }
            }, {
                text: "数学专项训练",
                effects: {
                    linearalgebra: 3,
                    combinatorics: 3,
                    polynomial: 3,
                    numbertheory: 3
                }
            }, {
                text: "文化课训练",
                effects: {
                    culture: 8
                }
            }],
            optionsToShow: 6
        },
        提升训练: {
            title: "提升训练",
            description: "人们只有会利用时间，才能真正地提升自己。你在碎片的时间里反复训练，水平也许会得到略微的提升——当然，你也可以选择摸鱼。",
            options: [{
                text: "动态规划专项训练",
                effects: {
                    dp: 2
                }
            }, {
                text: "数据结构专项训练",
                effects: {
                    ds: 2
                }
            }, {
                text: "字符串专项训练",
                effects: {
                    string: 2
                }
            }, {
                text: "图论专项训练",
                effects: {
                    graph: 2
                }
            }, {
                text: "组合计数专项训练",
                effects: {
                    combinatorics: 2
                }
            }, {
                text: "计算几何专项训练",
                effects: {
                    geometry: 2
                }
            }, {
                text: "线性代数专项训练",
                effects: {
                    linearalgebra: 2
                }
            }, {
                text: "数论专项训练",
                effects: {
                    numbertheory: 2
                }
            }, {
                text: "博弈论专项训练",
                effects: {
                    gametheory: 2
                }
            }, {
                text: "构造专项训练",
                effects: {
                    construction: 2
                }
            }, {
                text: "多项式专项训练",
                effects: {
                    polynomial: 2
                }
            }, {
                text: "线性规划专项训练",
                effects: {
                    linearprogramming: 2
                }
            }, {
                text: "概率论专项训练",
                effects: {
                    probability: 2
                }
            }, {
                text: "复分析专项训练",
                effects: {
                    complexanalysis: 2
                }
            }, {
                text: "数值方法专项训练",
                effects: {
                    numerical: 2
                }
            }, {
                text: "微积分专项训练",
                effects: {
                    calculus: 2
                }
            }, {
                text: "拟阵专项训练",
                effects: {
                    matroid: 2
                }
            }, {
                text: "数学专项训练",
                effects: {
                    linearalgebra: 1,
                    combinatorics: 1,
                    numbertheory: 1,
                    polynomial: 1,
                    calculus: 1,
                    numerical: 1,
                    probability: 1,
                    complexanalysis: 1
                }
            }, {
                text: "文化课训练",
                effects: {
                    culture: 3
                }
            }, {
                text: "训练不如摸鱼",
                effects: {},
                nextEvent: "摸鱼"
            }],
            optionsToShow: 6
        },
        比赛训练: {
            title: "比赛训练",
            description: "教练告诉你，比赛是检验你水平的最好方式。你开始参加比赛，你希望能在平时的比赛中找到自己的不足，并加以改进。这也许会给你正式的比赛带来帮助。",
            options: [{
                text: "按照教练推荐的，参加校内模拟赛",
                effects: {},
                nextEvent: "模拟赛"
            }, {
                text: "你注意到一些网站上也有比赛资源，也许可以打洛谷月赛",
                effects: {},
                nextEvent: "月赛"
            }, {
                text: "你注意到一些网站上也有比赛资源，也许可以打 Petrozavodsk Camp",
                effects: {},
                nextEvent: "PTZ"
            }, {
                text: "你偶然听说了 Codeforces，大家都说这里的题目质量很高，你决定去参加一下他们的比赛",
                effects: {},
                nextEvent: "Codeforces"
            }, {
                text: "你偶然听说了 Atcoder，大家都说这里的题目质量很高，你决定去参加一下他们的比赛",
                effects: {},
                nextEvent: "Atcoder"
            }, {
                text: "你偶然听说了 UOJ，大家都说这里的题目质量很高，你决定去参加一下他们的比赛",
                effects: {},
                nextEvent: "UOJ"
            }, {
                text: "你偶然听说了 LOJ，大家都说这里的题目质量很高，你决定去参加一下他们的比赛",
                effects: {},
                nextEvent: "LOJ"
            }, {
                text: "你偶然听说了 Universal Cup，大家都说这里的题目质量很高，你决定去参加一下他们的比赛",
                effects: {},
                nextEvent: "UCup"
            }, {
                text: "打比赛不如摸鱼",
                effects: {},
                nextEvent: "摸鱼"
            }],
            optionsToShow: 3
        },
        PA: {
            title: "PA",
            description: "“Runda 5 的题目好有难度...做了很久总算做完了...”，你看着屏幕上显示的“Accepted”，长舒了一口气。你决定继续做下去，你希望你能坚持下去，直到你成为一名优秀的 OIer。",
            options: [{
                text: "得到提升",
                effects: {
                    graph: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 3
                }
            }, ],
            optionsToShow: 1
        },
        QOJ: {
            title: "QOJ",
            description: "你不知道哪些题目是好的，于是你找了一场你顺眼的比赛，做了下去。你对你的选择感到很满意。",
            options: [{
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    ds: 1,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    ds: 1,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    geometry: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1,
                    linearalgebra: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1,
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 1,
                    combinatorics: 1,
                    linearalgebra: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    ds: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    ds: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    string: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3,
                    graph: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3,
                    dp: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 3,
                    string: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 3,
                    gametheory: 1
                }
            }, ],
            optionsToShow: 1
        },
        JOI: {
            title: "JOI",
            description: "你做了一场 JOISC，你觉得题目质量很高，但难度有些大。你觉得自己获得了很多收获。",
            options: [{
                text: "得到提升",
                effects: {
                    ds: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    dp: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    ds: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    combinatorics: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    construction: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1,
                    combinatorics: 2,
                    construction: 2
                }
            }, ],
            optionsToShow: 1
        },
        KOITST: {
            title: "KOI TST",
            description: "你做了一场 KOI TST，有好多数据结构题，你坐起来很累，但收获很多。",
            options: [{
                text: "得到提升",
                effects: {
                    ds: 5
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    dp: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2,
                    combinatorics: 1
                }
            }, ],
            optionsToShow: 1
        },
        OpenCup: {
            title: "OpenCup",
            description: "你做了一场 OpenCup，你不明白 Grand Prix 后面的地点都是什么意思，而是选择了一场看着比较顺眼的比赛开始做题",
            options: [{
                text: "得到提升",
                effects: {
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1,
                    geometry: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1,
                    string: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    dp: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    dp: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2,
                    polynomial: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2,
                    linearalgebra: 2
                }
            }, ],
            optionsToShow: 1
        },
        Timus: {
            title: "Timus",
            description: "你去 Timus 上做了一些题目。你觉得这些题目很奇怪，很有年代感，做起来让自己很不舒服...",
            options: [{
                text: "得到提升",
                effects: {
                    geometry: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    carefulness: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1,
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1,
                    linearalgebra: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1,
                    numbertheory: 3
                }
            }, ],
            optionsToShow: 1
        },
        TopCoder: {
            title: "TopCoder",
            description: "你费劲好久，终于明白如何在 TopCoder 上提交题目。啊哈，于是你打开了一场 SRM，做了起来",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1
                }
            }, ],
            optionsToShow: 1
        },
        CSES: {
            title: "CSES",
            description: "“嗯？这些题怎么都这么经典？”，你觉得这个 OJ 的题目很 educational，做起来确实很爽。",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 1,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 1,
                    string: 1
                }
            }, ],
            optionsToShow: 1
        },
        SPOJ: {
            title: "SPOJ",
            description: "你打开了 SPOJ……题目很多，不知道该怎么做，那就做做这个试试……？",
            options: [{
                text: "得到提升",
                effects: {
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1
                }
            }, ],
            optionsToShow: 1
        },
        刷题训练: {
            title: "刷题训练",
            description: "时间是事物的试金石。在网友的推荐下，你决定去板刷一些经典题库，你希望能在这些题目中找到自己的不足，并加以改进。",
            options: [{
                text: "你听说 PA 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "PA"
            }, {
                text: "你听说 KOI TST 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "KOITST"
            }, {
                text: "你听说 UOJ 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "UOJ"
            }, {
                text: "你听说 JOI 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "JOI"
            }, {
                text: "你听说 Open Cup 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "OpenCup"
            }, {
                text: "你听说 Timus 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "Timus"
            }, {
                text: "你听说 TopCoder 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "TopCoder"
            }, {
                text: "你听说 CSES 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "CSES"
            }, {
                text: "你听说 QOJ 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "QOJ"
            }, {
                text: "你听说 SPOJ 的题目质量不错，你打算尝试一下",
                effects: {},
                nextEvent: "SPOJ"
            }, {
                text: "打比赛不如摸鱼",
                effects: {},
                nextEvent: "摸鱼"
            }],
            optionsToShow: 4
        },
        决心商店: {
            title: "决心商店",
            description: "在梦境中，你到了一个神秘的商店。商店的老板告诉你，只要你愿意，你就可以用你的决心来提升你的能力。但也许你需要先慎重地考虑一下，你到底需要什么。每次购买后，商品的价格都会上涨。",
            isShop: !0,
            options: [{
                text: "思维提升",
                effects: {
                    thinking: 1
                },
                cost: 300,
                description: "花费300点决心提升1点思维能力（下次购买费用+200）"
            }, {
                text: "代码提升",
                effects: {
                    coding: 1
                },
                cost: 300,
                description: "花费300点决心提升1点代码能力（下次购买费用+200）"
            }, {
                text: "细心提升",
                effects: {
                    carefulness: 1
                },
                cost: 300,
                description: "花费300点决心提升1点细心（下次购买费用+200）"
            }, {
                text: "随机提升",
                effects: {
                    random: ["dp", "ds", "string", "graph", "combinatorics", "geometry", "linearalgebra", "numbertheory", "gametheory", "construction", "polynomial"]
                },
                cost: 150,
                description: "花费300点决心随机提升一项算法能力（下次购买费用+200）"
            }, {
                text: "心态恢复",
                effects: {
                    mood: 3
                },
                cost: 500,
                description: "花费500点决心提升3点心态（下次购买费用+100）"
            }, {
                text: "全面提升",
                effects: {
                    dp: 1,
                    ds: 1,
                    string: 1,
                    graph: 1,
                    combinatorics: 1,
                    geometry: 1,
                    linearalgebra: 1,
                    numbertheory: 1,
                    gametheory: 1,
                    construction: 1,
                    polynomial: 1
                },
                cost: 1e3,
                description: "花费1000点决心提升所有算法能力（下次购买费用+1000）"
            }, {
                text: "速度提升",
                effects: {
                    quickness: 1
                },
                cost: 1500,
                description: "花费1500点决心提升1点迅捷（下次购买费用+3000）"
            }, {
                text: "心理素质提升",
                effects: {
                    mental: 1
                },
                cost: 1500,
                description: "花费1500点决心提升1点心理素质（下次购买费用+5000）"
            }, {
                text: "经验提升",
                effects: {
                    experience: 1
                },
                cost: 1500,
                description: "花费1500点决心提升1点经验（下次购买费用+5000）"
            }, {
                text: "放弃购买",
                effects: {},
                description: "离开商店"
            }],
            optionsToShow: 6
        },
        好比赛: {
            title: "比赛",
            description: "你对这场比赛的质量十分满意，这确实是一场出的相当不错的比赛。不过他相当大的难度，让你感到有些力不从心。",
            options: [{
                text: "得到提升",
                effects: {
                    thinking: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 2
                }
            }, {
                text: "在做比赛的时候，你更加坚定了你的决心",
                effects: {
                    determination: 500
                }
            }, {
                text: "你觉得这不是你的正常发挥，你还能做的更好",
                effects: {},
                nextEvent: "焦虑"
            }],
            optionsToShow: 1
        },
        正常比赛: {
            title: "比赛",
            description: "这场比赛的质量还算中等，并没有到值得夸赞的地步，但你也许能从中获得一些启发，也可能因为打的不够好而陷入焦虑。",
            options: [{
                text: "得到提升",
                effects: {
                    thinking: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    coding: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 1
                }
            }, {
                text: "在做比赛的时候，你更加坚定了你的决心",
                effects: {
                    determination: 200
                }
            }, {
                text: "做完比赛你改变了看法：你觉得做这种比赛就是在浪费时间",
                effects: {
                    mood: +1
                }
            }, {
                text: "做完比赛你只觉得平平无奇，并没有带来什么实际效果",
                effects: {}
            }, {
                text: "你觉得这不是你的正常发挥，你还能做的更好",
                effects: {},
                nextEvent: "焦虑"
            }],
            optionsToShow: 1
        },
        烂比赛: {
            title: "比赛",
            description: "你意识到这是一场极其糟糕的比赛！你坚持认为这场比赛就是垃圾中的王者，不仅浪费时间还搞人心态。",
            options: [{
                text: "尽管如此，你还是从中得到了一些提升",
                effects: {
                    ds: 1
                }
            }, {
                text: "尽管如此，你还是从中得到了一些提升",
                effects: {
                    geometry: 1
                }
            }, {
                text: "尽管如此，你还是从中得到了一些提升",
                effects: {
                    linearalgebra: 1
                }
            }, {
                text: "尽管如此，你还是从中得到了一些提升",
                effects: {
                    numbertheory: 1
                }
            }, {
                text: "建议不会出题就不要出比赛，出题人纯纯智障",
                effects: {
                    mood: +2
                }
            }, {
                text: "好比赛，下次别出了",
                effects: {
                    mood: +1
                }
            }, {
                text: "虽然很垃圾但也就这样，这不会影响什么事",
                effects: {}
            }, {
                text: "这是不是我的问题？如果真正的比赛也是这样的，那我该怎么办？",
                effects: {},
                nextEvent: "焦虑"
            }, {
                text: "我再也不会笑了",
                effects: {
                    determination: +300
                }
            }, {
                text: "做这场比赛不如去看奶龙大战暴暴龙",
                effects: {
                    determination: +500
                }
            }, {
                text: "出题人，****",
                effects: {
                    determination: +1e3
                }
            }],
            optionsToShow: 1
        },
        娱乐时间: {
            title: "娱乐时间",
            description: "每天反复想题写题的生活一定是很压抑的，你决定利用好你的娱乐时间，做一些你觉得有意义的事情。",
            options: [{
                text: "你趁其他人娱乐，想要偷学一会",
                effects: {},
                nextEvent: "偷学"
            }, {
                text: "你困得不行了，为什么不休息一会",
                effects: {},
                nextEvent: "休息"
            }, {
                text: "年少不知摸鱼好",
                effects: {},
                nextEvent: "摸鱼"
            }, {
                text: "打隔膜是一种很好的娱乐方式",
                effects: {},
                nextEvent: "打隔膜"
            }, {
                text: "有空的时候多去看看世界，看看大自然",
                effects: {},
                nextEvent: "出游"
            }, {
                text: "该去摸鱼，看看网友们都写了什么",
                effects: {},
                nextEvent: "阅读博客"
            }],
            optionsToShow: 3
        },
        模拟赛: {
            title: "模拟赛",
            description: "你参加了一场校内模拟赛...",
            options: [{
                text: "必须认真打好每一个部分分",
                effects: {
                    coding: 1,
                    experience: 1
                },
                nextEventProbability: {
                    好比赛: .1,
                    正常比赛: .2,
                    烂比赛: .7
                }
            }, {
                text: "随便做做也许会稍微有点提升",
                effects: {
                    random: ["linearalgebra", "geometry", "string", "combinatorics", "experience"]
                }
            }, {
                text: "有这时间不如打打隔膜",
                effects: {},
                nextEvent: "打隔膜"
            }],
            optionsToShow: 3
        },
        月赛: {
            title: "月赛",
            description: "你参加了一场洛谷月赛...",
            options: [{
                text: "必须认真打好每一个部分分",
                nextEventProbability: {
                    好比赛: .05,
                    正常比赛: .15,
                    烂比赛: .8
                }
            }, {
                text: "有这时间不如打打隔膜",
                effects: {},
                nextEvent: "打隔膜"
            }, {
                text: "边做边摸鱼真是一件美妙的事情",
                effects: {},
                nextEvent: "摸鱼"
            }, {
                text: "做了一半你决定摆了",
                effects: {}
            }],
            optionsToShow: 3
        },
        UCup: {
            title: "Universal Cup",
            description: "你参加了一场 Universal Cup 比赛...",
            options: [{
                text: "我要去找个队友，一起参赛",
                effects: {
                    mood: 2
                },
                nextEventProbability: {
                    好比赛: .5,
                    正常比赛: .35,
                    烂比赛: .15
                }
            }, {
                text: "我要来单挑 ucup，努力加训",
                effects: {
                    coding: 1
                },
                nextEventProbability: {
                    好比赛: .5,
                    正常比赛: .35,
                    烂比赛: .15
                }
            }, {
                text: "边做边摸鱼真是一件美妙的事情",
                effects: {},
                nextEvent: "摸鱼"
            }, {
                text: "做了一半你决定摆了",
                effects: {}
            }],
            optionsToShow: 3
        },
        PTZ: {
            title: "Petrozavodsk Camp",
            description: "你参加了一场 Petrozavodsk Camp 比赛...",
            options: [{
                text: "我要去找个队友，一起参赛",
                effects: {
                    mood: 3
                },
                nextEventProbability: {
                    好比赛: .4,
                    正常比赛: .5,
                    烂比赛: .1
                }
            }, {
                text: "我要来单挑 PTZ Camp，努力加训",
                effects: {
                    coding: 1
                },
                nextEventProbability: {
                    好比赛: .4,
                    正常比赛: .5,
                    烂比赛: .1
                }
            }, {
                text: "边做边摸鱼真是一件美妙的事情",
                effects: {},
                nextEvent: "摸鱼"
            }, {
                text: "做了一半你决定摆了",
                effects: {}
            }]
        },
        看不懂: {
            title: "看不懂这些东西",
            description: "这也太难了，完全不能理解，你决定放弃。",
            options: [{
                text: "我再也不会笑了",
                effects: {
                    determination: +300
                }
            }, {
                text: "自己这么笨，是不是要完蛋了",
                effects: {
                    mood: +2
                }
            }, {
                text: "为什么我要学 OI 啊？？",
                effects: {
                    mood: +3
                }
            }, ],
            optionsToShow: 1
        },
        学会Elegia: {
            title: "学习了 Elegia 的博客",
            description: "你学习了 Elegia 的博客，你发现他的博客写的非常棒，你爱上了这些科技，决定以后多学习学习他的博客。",
            options: [{
                text: "得到提升",
                effects: {
                    linearalgebra: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    calculus: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    probability: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    complexanalysis: 8
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2,
                    linearalgebra: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 2,
                    dp: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 4
                }
            }, ],
            optionsToShow: 1
        },
        学会zhoukangyang: {
            title: "学会zhoukangyang",
            description: "你学会了zhoukangyang的博客，你惊讶的发现，原来OI还可以这么有趣，你决定以后多学习学习他的博客。",
            options: [{
                text: "得到提升",
                effects: {
                    thinking: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    dp: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    numbertheory: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    ds: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 3
                }
            }, ],
            optionsToShow: 1
        },
        学会skip2004: {
            title: "学会skip2004",
            description: "你学会了skip2004的博客，发现了很多写代码的小技巧，现在你充满了力量！！",
            options: [{
                text: "得到提升",
                effects: {
                    coding: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    carefulness: 1
                }
            }, ],
            optionsToShow: 1
        },
        学会Crysfly: {
            title: "学会Crysfly",
            description: "你阅读了Crysfly的博客，你很喜欢 xy 语语录，你觉得非常有趣。",
            options: [{
                text: "得到提升",
                effects: {
                    mood: 3
                }
            }, ],
            optionsToShow: 1
        },
        学会dottle: {
            title: "学会dottle",
            description: "你阅读了dottle的博客，你很喜欢他的这些文学作品，你的内心产生了一丝触动。",
            options: [{
                text: "得到提升",
                effects: {
                    mood: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    mood: 1,
                    thinking: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    mental: 1
                }
            }, ],
            optionsToShow: 1
        },
        学会最新科技: {
            title: "学会最新科技",
            description: "你阅读了arXiv上的最新文章，你发现了一些新的科技，但你不知道除了把他们搬到联考还能干些什么。",
            options: [{
                text: "得到提升",
                effects: {
                    thinking: 3,
                    combinatorics: 6
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 3,
                    numbertheory: 6
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 3,
                    gametheory: 6
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 3,
                    graph: 4
                }
            }, ],
            optionsToShow: 1
        },
        学会dXqwq: {
            title: "学会dXqwq",
            description: "你阅读了dXqwq的推文后，他爱上了与你聊天，并向你传授了 OI 技巧",
            options: [{
                text: "得到提升",
                effects: {
                    ds: 4
                }
            }, ]
        },
        学会adamant: {
            title: "学会adamant",
            description: "你阅读了adamant的博客，学到了一些奇奇怪怪的东西。",
            options: [{
                text: "得到提升",
                effects: {
                    numbertheory: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    polynomial: 4
                }
            }, ],
            optionsToShow: 1
        },
        学会号妈培训: {
            title: "学会号妈培训",
            description: "你阅读了号妈培训的博客，感慨到：铜鼓我的努力，我也可以变得比他们更加厉害。",
            options: [{
                text: "得到提升",
                effects: {
                    determination: 1e3,
                    mood: 1
                }
            }, ]
        },
        学会djq_cpp: {
            title: "学会djq_cpp",
            description: "你阅读了djq_cpp的课件，这道题好像很有意思！",
            options: [{
                text: "得到提升",
                effects: {
                    combinatorics: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, ],
            optionsToShow: 1
        },
        学会xudyh: {
            title: "学会xudyh",
            description: "你阅读了xudyh的课件，尽管非常难懂，你花了很久才理解这是在写什么，但是你学到了很多东西。",
            options: [{
                text: "得到提升",
                effects: {
                    combinatorics: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 4
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 4
                }
            }, ],
            optionsToShow: 1
        },
        学会VFleaKing: {
            title: "学会VFleaKing",
            description: "你阅读了VFleaKing的博客，你非常喜欢 “四色的 NOI”这篇博客，你感受到了新的力量，并决定以后多多参加 UOJ 的比赛",
            options: [{
                text: "得到提升",
                effects: {
                    mood: 2
                }
            }, ],
            optionsToShow: 1
        },
        "学会Petr Mitrichev": {
            title: "学会Petr Mitrichev",
            description: "你阅读了Petr Mitrichev的博客里提及的本周的比赛，并做了一下 Petr 认为有趣的题目。",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 1,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 1,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 1,
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1,
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 1,
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1,
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1,
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    dp: 1,
                    linearalgebra: 1
                }
            }, ],
            optionsToShow: 1
        },
        抑郁: {
            title: "抑郁",
            description: "完成后，你感到非常的抑郁。你觉得似懂非懂，又感到人生无比艰难，不知所措",
            options: [{
                text: "哎",
                effects: {
                    mood: +2
                }
            }, {
                text: "哎",
                effects: {
                    mood: +3
                }
            }, {
                text: "哎",
                effects: {
                    determination: +1e3
                }
            }, ],
            optionsToShow: 1
        },
        阅读博客: {
            title: "阅读博客",
            description: "你选择阅读网友留下的文字，汲取一些知识",
            options: [{
                text: "阅读 Elegia 的博客",
                getNextEventProbability: function() {
                    let e = Math.min(.6, .05 * (playerStats.polynomial || 0))
                      , t = Math.min(.6, .05 * (playerStats.linearalgebra || 0))
                      , n = Math.min(.6, .05 * (playerStats.combinatorics || 0))
                      , r = Math.min(.7, .1 + e + t + n);
                    return {
                        看不懂: 1 - r,
                        学会Elegia: r
                    }
                }
            }, {
                text: "阅读 zhoukangyang 的博客",
                getNextEventProbability: function() {
                    let e = Math.min(.9, .1 * (playerStats.thinking || 0))
                      , t = Math.min(.9, .5 + e);
                    return {
                        看不懂: 1 - t,
                        学会zhoukangyang: t
                    }
                }
            }, {
                text: "阅读 skip2004 的博客",
                nextEventProbability: {
                    看不懂: .2,
                    学会skip2004: .8
                }
            }, {
                text: "阅读 Petr Mitrichev 的博客",
                nextEventProbability: {
                    看不懂: .25,
                    "学会Petr Mitrichev": .75
                }
            }, {
                text: "阅读 Crysfly 的博客",
                nextEventProbability: {
                    看不懂: 0,
                    学会Crysfly: 1
                }
            }, {
                text: "阅读 dottle 的博客",
                getNextEventProbability: function() {
                    let e = Math.min(.95, .1 * (playerStats.culture || 0))
                      , t = Math.min(.95, .01 * (playerStats.mental || 0))
                      , n = Math.min(.95, .02 * (playerStats.thinking || 0))
                      , r = Math.min(.95, .4 + e + t + n);
                    return {
                        看不懂: 1 - r,
                        学会dottle: r
                    }
                }
            }, {
                text: "阅读 dXqwq 的 X",
                getNextEventProbability: function() {
                    let e = Math.min(.5, .1 * (playerStats.mental || 0))
                      , t = Math.min(.3, .02 * (playerStats.mood || 0))
                      , n = Math.min(.3, .02 * (playerStats.culture || 0))
                      , r = Math.min(.95, .4 + e + t + n);
                    return {
                        抑郁: 1 - r,
                        学会dXqwq: r
                    }
                }
            }, {
                text: "阅读 djq_cpp 的课件",
                getNextEventProbability: function() {
                    let e = Math.min(.2, .03 * (playerStats.dp || 0))
                      , t = Math.min(.2, .03 * (playerStats.graph || 0))
                      , n = Math.min(.2, .02 * (playerStats.ds || 0))
                      , r = Math.min(.2, .02 * (playerStats.combinatorics || 0))
                      , a = Math.min(.1, .01 * (playerStats.numbertheory || 0))
                      , o = Math.min(.1, .01 * (playerStats.linearalgebra || 0))
                      , s = Math.min(.1, .05 * (playerStats.thinking || 0))
                      , i = Math.min(.99, .3 + e + t + n + r + a + o + s);
                    return {
                        看不懂: 1 - i,
                        学会djq_cpp: i
                    }
                }
            }, {
                text: "阅读 xudyh 的课件",
                nextEventProbability: {
                    看不懂: .7,
                    学会xudyh: .3
                }
            }, {
                text: "阅读 VFleaKing 的博客",
                nextEventProbability: {
                    看不懂: .1,
                    学会VFleaKing: .9
                }
            }, {
                text: "阅读 arXiv 上的最新文章",
                getNextEventProbability: function() {
                    let e = Math.min(.2, .005 * (playerStats.dp || 0))
                      , t = Math.min(.2, .01 * (playerStats.graph || 0))
                      , n = Math.min(.2, .02 * (playerStats.ds || 0))
                      , r = Math.min(.2, .02 * (playerStats.combinatorics || 0))
                      , a = Math.min(.1, .01 * (playerStats.numbertheory || 0))
                      , o = Math.min(.1, .01 * (playerStats.linearalgebra || 0))
                      , s = Math.min(.3, .05 * (playerStats.thinking || 0))
                      , i = Math.min(.9, 0 + e + t + n + r + a + o + s);
                    return {
                        看不懂: 1 - i,
                        学会最新科技: i
                    }
                }
            }, {
                text: "阅读 adamant 的博客",
                nextEventProbability: {
                    看不懂: .3,
                    学会adamant: .7
                }
            }, {
                text: "阅读 号妈培训 的博客",
                nextEventProbability: {
                    抑郁: .5,
                    学会号妈培训: .5
                }
            }],
            optionsToShow: 3
        },
        "做不出来 Puzzle": {
            title: "拼尽全力，无法战胜纸笔迷题",
            description: "你参加了一场纸笔迷题比赛，但是你的成绩非常糟糕，你变得非常难过",
            options: [{
                text: "人生好艰难",
                effects: {
                    mood: +1
                }
            }, ]
        },
        "Puzzle 挂分": {
            title: "Puzzle 挂分",
            description: "你参加了一场纸笔迷题比赛，你觉得自己打的很好，结果比完后发现，自己竟然挂了很多分！",
            options: [{
                text: "什么锤子比赛？",
                effects: {
                    mood: +2
                }
            }, ]
        },
        完成Puzzle: {
            title: "完成 Puzzle 比赛",
            description: "你做了一场 Puzzle 比赛，你打得非常不错，提高了你的智慧水平！",
            options: [{
                text: "得到提升",
                effects: {
                    thinking: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    carefulness: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 2
                }
            }, ],
            optionsToShow: 1
        },
        做不出来数学题: {
            title: "做不出来数学题",
            description: "这些数学问题很有趣，但是你的表现非常糟糕，你觉得自己的 OI 也要没救了",
            options: [{
                text: "怎么这么有难度",
                effects: {
                    mood: +1
                }
            }, {
                text: "怎么这么有难度",
                effects: {
                    determination: +500
                }
            }, ],
            optionsToShow: 1
        },
        完成OMC: {
            title: "完成 OMC",
            description: "你参加了一场 OMC 比赛，你打得非常不错，提高了你的数学水平！",
            options: [{
                text: "得到提升",
                effects: {
                    combinatorics: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 2
                }
            }, ],
            optionsToShow: 1
        },
        完成AoPS: {
            title: "完成 AoPS",
            description: "你在 AoPS 上看到了一道有趣的问题，你想了想，轻松将它解决，并从评论中获得了许多更有趣的解决方法！",
            options: [{
                text: "得到提升",
                effects: {
                    combinatorics: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3
                }
            }, ],
            optionsToShow: 1
        },
        完成Euclidea: {
            title: "完成 Euclidea",
            description: "你游玩了 Euclidea，显著提升了你的尺规作图水平，你感到几何很有意思",
            options: [{
                text: "得到提升",
                effects: {
                    geometry: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3
                }
            }, ],
            optionsToShow: 1
        },
        玩不明白魔塔: {
            title: "玩不明白魔塔",
            description: "你尝试游玩魔塔，但你无论怎么计算，都会卡在第 15 层。你 SL 了半天都无法战胜，只能遗憾离场",
            options: [{
                text: "太难了。",
                effects: {
                    mood: +2
                }
            }, ]
        },
        完成魔塔: {
            title: "完成魔塔",
            description: "你游玩了魔塔，显著提升了你的游戏水平与计算能力。你在想，如果未来我成为了出题人，我要给比赛投一道魔塔提答。",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 2,
                    construction: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 5
                }
            }, ],
            optionsToShow: 1
        },
        发现一个有趣的题目: {
            title: "发现一个有趣的题目",
            description: "在随机浏览的过程中，发现了一个有趣的题目？！你决定把它记录下来，并分享给你的朋友们。",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    ds: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    numbertheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    string: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    graph: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    geometry: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    combinatorics: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    linearalgebra: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    gametheory: 1
                }
            }, {
                text: "得到提升",
                effects: {
                    culture: 2
                }
            }, ],
            optionsToShow: 1
        },
        水知乎: {
            title: "水知乎",
            description: "你在知乎上水到了很多有趣的回答，这个段子怎么这么好笑。",
            options: [{
                text: "得到提升",
                effects: {
                    mood: 2
                }
            }, ]
        },
        杀戮尖塔很好玩: {
            title: "杀戮尖塔很好玩",
            description: "你和戴讲起一起沉迷游玩杀戮尖塔，度过了充实而又深刻的一天。",
            options: [{
                text: "得到提升",
                effects: {
                    dp: 1,
                    mood: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    construction: 1,
                    mood: 2
                }
            }, {
                text: "得到提升",
                effects: {
                    mood: 3
                }
            }, {
                text: "得到提升",
                effects: {
                    thinking: 1,
                    mood: 1
                }
            }, ],
            optionsToShow: 1
        },
        不务正业: {
            title: "不务正业",
            description: "今天好无聊，不想做算法竞赛了，你想做点什么？",
            options: [{
                text: "参加 WPF Puzzle GP",
                nextEventProbability: {
                    "做不出来 Puzzle": .4,
                    "Puzzle 挂分": .2,
                    完成Puzzle: .4
                }
            }, {
                text: "参加 WPF Sudoku GP",
                nextEventProbability: {
                    "做不出来 Puzzle": .5,
                    "Puzzle 挂分": .25,
                    完成Puzzle: .25
                }
            }, {
                text: "参加 LMI Puzzle 比赛",
                nextEventProbability: {
                    "做不出来 Puzzle": .25,
                    完成Puzzle: .75
                }
            }, {
                text: "参加 OMC (Online Math Contest)",
                getNextEventProbability: function() {
                    let e = Math.min(.25, .04 * (playerStats.combinatorics || 0))
                      , t = Math.min(.25, .04 * (playerStats.numbertheory || 0))
                      , n = Math.min(.25, .04 * (playerStats.geometry || 0))
                      , r = Math.min(.1, .02 * (playerStats.linearalgebra || 0))
                      , a = Math.min(.1, .02 * (playerStats.graph || 0))
                      , o = Math.min(.99, .4 + e + t + n + r + a);
                    return {
                        做不出来数学题: 1 - o,
                        完成OMC: o
                    }
                }
            }, {
                text: "刷刷 AoPS (Art of Problem Solving)",
                getNextEventProbability: function() {
                    let e = Math.min(.25, .05 * (playerStats.thinking || 0))
                      , t = Math.min(.25, .04 * (playerStats.combinatorics || 0))
                      , n = Math.min(.25, .04 * (playerStats.numbertheory || 0))
                      , r = Math.min(.25, .04 * (playerStats.geometry || 0))
                      , a = Math.min(.1, .02 * (playerStats.linearalgebra || 0))
                      , o = Math.min(.1, .02 * (playerStats.graph || 0))
                      , s = Math.min(.99, .1 + t + n + r + a + o + e);
                    return {
                        做不出来数学题: 1 - s,
                        完成AoPS: s
                    }
                }
            }, {
                text: "水水知乎",
                nextEventProbability: {
                    抑郁: .1,
                    水知乎: .5,
                    发现一个有趣的题目: .4
                }
            }, {
                text: "玩杀戮尖塔",
                nextEventProbability: {
                    抑郁: .1,
                    杀戮尖塔很好玩: .9
                }
            }, {
                text: "玩 Euclidea",
                getNextEventProbability: function() {
                    let e = Math.min(.4, .1 * (playerStats.thinking || 0))
                      , t = Math.min(.3, .05 * (playerStats.construction || 0))
                      , n = Math.min(.3, .05 * (playerStats.geometry || 0))
                      , r = Math.min(.99, .3 + t + n + e);
                    return {
                        做不出来数学题: 1 - r,
                        完成Euclidea: r
                    }
                }
            }, {
                text: "游玩魔塔",
                getNextEventProbability: function() {
                    let e = Math.min(.4, .07 * (playerStats.thinking || 0))
                      , t = Math.min(.3, .05 * (playerStats.construction || 0))
                      , n = Math.min(.3, .03 * (playerStats.dp || 0))
                      , r = Math.min(.99, .4 + t + n + e);
                    return {
                        玩不明白魔塔: 1 - r,
                        完成魔塔: r
                    }
                }
            }, {
                text: "阅读博客",
                nextEvent: "阅读博客"
            }, {
                text: "好像没什么可做的，还是去提升训练吧",
                nextEvent: "提升训练"
            }, {
                text: "休息",
                nextEvent: "休息"
            }],
            optionsToShow: 3
        },
        Codeforces: {
            title: "Codeforces",
            description: "你参加了一场 Codeforces 比赛...",
            options: [{
                text: "认真打好每一题，必须全神贯注！",
                effects: {
                    thinking: 1
                },
                nextEventProbability: {
                    好比赛: .3,
                    正常比赛: .6,
                    烂比赛: .1
                }
            }, {
                text: "随便做做，别把 rating 看的太重了",
                probabilityEffects: [{
                    probability: .5,
                    effects: {
                        thinking: 1
                    }
                }, {
                    probability: .5,
                    effects: {
                        mood: +1
                    }
                }]
            }, {
                text: "你发现第一题做不出来，放弃就不会掉分",
                effects: {}
            }],
            optionsToShow: 3
        },
        Atcoder: {
            title: "Atcoder",
            description: "你参加了一场 Atcoder 比赛...",
            options: [{
                text: "认真打好每一题，必须全神贯注！",
                effects: {
                    thinking: 1
                },
                nextEventProbability: {
                    好比赛: .65,
                    正常比赛: .3,
                    烂比赛: .05
                }
            }, {
                text: "随便做做，别把 rating 看的太重了",
                probabilityEffects: [{
                    probability: .6,
                    effects: {
                        thinking: 1
                    }
                }, {
                    probability: .4,
                    effects: {
                        mood: +1
                    }
                }]
            }, {
                text: "你发现第一题做不出来，放弃也会掉分",
                effects: {
                    mood: +1
                }
            }],
            optionsToShow: 3
        },
        UOJ: {
            title: "UOJ",
            description: "你参加了一场 UOJ 比赛...",
            options: [{
                text: "认真打好每一题，必须全神贯注！",
                effects: {
                    carefulness: 1
                },
                nextEventProbability: {
                    好比赛: .55,
                    正常比赛: .3,
                    烂比赛: .15
                }
            }, {
                text: "随便做做，别把 rating 看的太重了",
                effects: {
                    thinking: 1
                }
            }, {
                text: "你发现第一题做不出来，放弃也会掉分",
                effects: {
                    mood: +1
                }
            }],
            optionsToShow: 3
        },
        LOJ: {
            title: "LOJ",
            description: "LOJ 现在根本没有比赛！你感到很难过，很气愤！",
            options: [{
                text: "真是气死我了！",
                effects: {
                    mood: +1
                }
            }, ]
        },
        赛前一天: {
            title: "赛前一天",
            description: "不知不觉已经到了比赛前的最后一天，你不再希望提升你的能力，你只祈祷在比赛中取得一个好成绩——那么现在做什么，才能带来好运呢？",
            options: [{
                text: "缓和心态",
                effects: {
                    mood: 8 + playerStats.mental
                },
                description: "调整心态到恰好为 " + (8 + playerStats.mental)
            }, {
                text: "放松一下",
                effects: {
                    mood: 2
                },
                description: "心态+2"
            }, {
                text: "渐入梦境",
                effects: {},
                nextEvent: "决心商店",
                description: "进入决心商店"
            }, {
                text: "提升训练",
                effects: {},
                nextEvent: "提升训练",
                description: "进行提升训练"
            }, {
                text: "休息一下",
                effects: {},
                nextEvent: "休息",
                description: "休息"
            }],
            optionsToShow: 5
        },
        步入高二: {
            title: "步入高二",
            description: "时光飞逝，转眼间你已经升入高二。新的学年带来了新的挑战，你需要在OI和文化课之间找到平衡。你的决心依然坚定，但你也意识到时间变得更加宝贵。",
            options: [{
                text: "专注OI",
                effects: {
                    determination: 2e3,
                    culture: +2
                },
                description: "你决定继续专注于OI，为接下来的比赛做准备"
            }, {
                text: "均衡发展",
                effects: {
                    determination: 1e3,
                    culture: 2,
                    mood: 1
                },
                description: "你试图在OI和文化课之间找到平衡"
            }, {
                text: "感到迷茫",
                effects: {
                    determination: +200,
                    mood: +2
                },
                nextEvent: "焦虑",
                description: "面对繁重的学业压力，你开始质疑自己的选择"
            }, {
                text: "重整旗鼓",
                effects: {
                    determination: 500,
                    thinking: 1,
                    coding: 1
                },
                description: "新的学年给了你新的动力，你决定以更好的状态面对挑战"
            }],
            optionsToShow: 2
        },
        "成为 UOJ 管理员": {
            title: "UOJ 管理员",
            description: "你成为了 UOJ 的管理员！你选择投入时间，为 UOJ 的发展贡献自己的力量。",
            options: [{
                text: "好",
                effects: {
                    mood: 2,
                    isUOJAdmin: !0
                }
            }, ]
        },
        UOJ管理员: {
            title: "UOJ 管理员招募",
            description: "你听说 UOJ 正在招募下一届管理员！刚好，作为获得了保送资格的集训队选手，你有充分多的时间参与 UOJ 的管理工作。你想要成为 UOJ 的管理员吗？",
            options: [{
                text: "成为管理员",
                effects: {},
                nextEvent: "UOJ管理员",
                description: "成为 UOJ 管理员"
            }, {
                text: "不感兴趣",
                effects: {}
            }, ]
        },
        LOJ管理员: {
            title: "LOJ 管理员招募",
            description: "你听说 LOJ 正在招募下一届管理员！刚好，作为获得了保送资格的集训队选手，你有充分多的时间参与 LOJ 的管理工作。你想要成为 LOJ 的管理员吗？",
            options: [{
                text: "成为管理员",
                effects: {
                    isLOJAdmin: !0
                }
            }, {
                text: "不感兴趣",
                effects: {}
            }, ]
        }
    }
};
let lastActions = []
  , currentCodeProgress = 0
  , isEventActive = !1;
function logEvent(e, t="normal") {
    e = String(e || "");
    let n = "";
    switch (t) {
    case "event":
        n = "【事件】";
        break;
    case "think":
        n = "【思考】";
        break;
    case "code":
        n = "【代码】";
        break;
    case "check":
        n = "【对拍】"
    }
    let r = `<p style="color: #000000">${n} ${e}</p>`;
    gameLog.push(r);
    let a = document.getElementById("log");
    a.innerHTML = gameLog.join(""),
    setTimeout( () => {
        a.scrollTop = a.scrollHeight
    }
    , 0)
}
function showEvent(e, t, n) {
    isEventActive = !0,
    document.getElementById("event-title").textContent = e.name,
    document.getElementById("event-description").textContent = e.description;
    let r = {
        lastActions,
        mood,
        codeProgress: codeProgress[t][n]
    }
      , a = e.effect(r);
    mood = r.mood,
    codeProgress[t][n] = r.codeProgress,
    currentCodeProgress = r.codeProgress,
    document.getElementById("event-effect").textContent = a,
    document.getElementById("event-panel").style.display = "flex",
    logEvent(e.name, "event"),
    logEvent(e.description, "event"),
    logEvent(a, "event"),
    updateStatus(),
    document.getElementById("player-mood").textContent = mood
}
function closeEvent() {
    isEventActive = !1,
    document.getElementById("event-panel").style.display = "none"
}
const randomEvents = [{
    name: "心态爆炸",
    description: "连续失败让你感到沮丧...",
    effect: e => (e.mood = Math.max(0, e.mood + 1),
    "心态值+1"),
    condition(e) {
        let t = e.lastActions.slice(-3);
        return 3 === t.length && t.every(e => e === t[0])
    },
    probability: .05
}, {
    name: "灵光一闪",
    description: "突然想到了一个好方法！",
    effect: e => (e.mood = Math.min(256, e.mood + 1),
    "心态值+1"),
    condition(e) {
        let t = e.lastActions.slice(-1);
        return t.every(e => "think" === e) && e.thinkProgress > calculateThinkTime(e.currentSubProblem) / 2
    },
    probability: .03
}, {
    name: "代码bug",
    description: "写着写着发现之前的代码有问题...",
    effect: e => (e.codeProgress = Math.max(0, e.codeProgress + 1),
    "代码进度+1"),
    condition(e) {
        let t = e.lastActions.slice(-2);
        return e.codeProgress > calculateCodeTime(e.currentSubProblem) / 2 && t.every(e => "code" === e)
    },
    probability: .03
}, {
    name: "键盘故障",
    description: "键盘突然有点不太灵了...",
    effect: e => (e.mood = Math.max(0, e.mood + 1),
    "心态值+1"),
    condition(e) {
        let t = e.lastActions.slice(-2);
        return t.every(e => "code" === e)
    },
    probability: .02
}, {
    name: "监考老师巡视",
    description: "监考老师正在经过你的座位...",
    effect: e => (e.mood = Math.max(0, e.mood + 1),
    "心态值+1"),
    condition: e => !0,
    probability: .01
}];
function triggerRandomEvent(e, t) {
    if (timePoints <= 0 || isEventActive)
        return;
    let n = {
        lastActions,
        mood,
        codeProgress: codeProgress[e][t],
        thinkProgress: thinkProgress[e][t],
        currentSubProblem: subProblems[e][t]
    }
      , r = [...randomEvents].sort( () => Math.random() - .5);
    for (let a of r)
        if (a.condition(n) && Math.random() < a.probability) {
            document.getElementById("event-title").textContent = a.name,
            document.getElementById("event-description").textContent = a.description;
            let o = a.effect(n);
            document.getElementById("event-effect").textContent = o,
            mood = n.mood,
            codeProgress[e][t] = n.codeProgress,
            document.getElementById("event-panel").style.display = "flex",
            isEventActive = !0,
            logEvent(`触发突发事件：${a.name}`, "event"),
            logEvent(a.description, "event"),
            logEvent(o, "event"),
            logEvent(`当前心态值：${mood}`, "event"),
            updateStatus();
            return
        }
}
const storyConfigs = {
    1: {
        title: "NOIP",
        content: "今天是NOIP复赛的日子，你坐在机房里，看着屏幕上的题目。作为一名OI选手，你需要在有限的时间内完成这些题目。合理分配时间，发挥你的算法专精，争取获得好成绩！"
    },
    2: {
        title: "省选模拟赛",
        content: "这是一场省选模拟赛，题目难度比NOIP更高。你需要更加谨慎地思考，合理利用你的算法专精。记住，细节决定成败！"
    },
    3: {
        title: "集训队选拔",
        content: "这是集训队选拔赛，竞争异常激烈。每个题目都需要你全力以赴，发挥出最佳水平。你的算法专精将是你最强大的武器！"
    }
};
function updateStatus() {
    document.getElementById("time-points").textContent = timePoints,
    problems && problems.length > 0 && currentProblem > 0 ? document.getElementById("current-problem").textContent = `T${currentProblem} (${problems[currentProblem - 1].name})` : document.getElementById("current-problem").textContent = "未开始",
    document.getElementById("player-stats-panel").querySelector("h3").innerHTML = `玩家属性 <br> <span style="color: ${({
        easy: "#28a745",
        normal: "#17a2b8",
        hard: "#ffc107",
        expert: "#dc3545"
    })[gameDifficulty]}; font-size: 0.9em;">[${({
        easy: "简单",
        normal: "普通",
        hard: "困难",
        expert: "专家"
    })[gameDifficulty]}难度]</span>`,
    document.getElementById("player-determination").textContent = playerStats.determination,
    document.getElementById("player-mood").textContent = mood,
    document.getElementById("player-dp").textContent = playerStats.dp,
    document.getElementById("player-ds").textContent = playerStats.ds,
    document.getElementById("player-string").textContent = playerStats.string,
    document.getElementById("player-graph").textContent = playerStats.graph,
    document.getElementById("player-combinatorics").textContent = playerStats.combinatorics,
    document.getElementById("player-geometry").textContent = playerStats.geometry,
    document.getElementById("player-linearalgebra").textContent = playerStats.linearalgebra,
    document.getElementById("player-calculus").textContent = playerStats.calculus,
    document.getElementById("player-numerical").textContent = playerStats.numerical,
    document.getElementById("player-probability").textContent = playerStats.probability,
    document.getElementById("player-complexanalysis").textContent = playerStats.complexanalysis,
    document.getElementById("player-linearprogramming").textContent = playerStats.linearprogramming,
    document.getElementById("player-constant").textContent = playerStats.constant,
    document.getElementById("player-matroid").textContent = playerStats.matroid,
    document.getElementById("player-gametheory").textContent = playerStats.gametheory,
    document.getElementById("player-construction").textContent = playerStats.construction,
    document.getElementById("player-polynomial").textContent = playerStats.polynomial,
    document.getElementById("player-numbertheory").textContent = playerStats.numbertheory,
    document.getElementById("player-experience").textContent = playerStats.experience,
    document.getElementById("player-thinking").textContent = playerStats.thinking,
    document.getElementById("player-coding").textContent = playerStats.coding,
    document.getElementById("player-crypto").textContent = playerStats.crypto;
    let e = document.getElementById("carefulness-stat")
      , t = document.getElementById("quickness-stat")
      , n = document.getElementById("mental-stat")
      , r = document.getElementById("culture-stat");
    if (playerStats.carefulness > 0 ? (e.style.display = "block",
    document.getElementById("player-carefulness").textContent = playerStats.carefulness) : e.style.display = "none",
    playerStats.quickness > 0 ? (t.style.display = "block",
    document.getElementById("player-quickness").textContent = playerStats.quickness) : t.style.display = "none",
    playerStats.mental > 0 ? (n.style.display = "block",
    document.getElementById("player-mental").textContent = playerStats.mental) : n.style.display = "none",
    playerStats.culture > 0 ? (r.style.display = "block",
    document.getElementById("player-culture").textContent = playerStats.culture) : r.style.display = "none",
    updateSubProblems(),
    timePoints > 0) {
        let a = !0;
        for (let o = 0; o < totalProblems; o++) {
            let s = subProblems[o].length - 1;
            if (!isCodeComplete[o][s]) {
                a = !1;
                break
            }
        }
        let i = document.querySelector(".actions")
          , l = i.querySelectorAll('button[onclick="showResults"], #leave-early-btn');
        if (l.forEach(e => e.remove()),
        (a || !0 == debugmode) && !document.getElementById("leave-early-btn")) {
            let c = document.createElement("button");
            c.id = "leave-early-btn",
            c.className = "btn blue",
            c.textContent = "提前离场",
            c.onclick = () => {
                timePoints = 0,
                c.style.display = "none",
                updateStatus()
            }
            ,
            i.appendChild(c)
        }
    } else if (0 === timePoints) {
        let p = document.querySelector(".actions")
          , m = p.querySelectorAll(".view-results-btn");
        if (m.forEach(e => e.remove()),
        !document.querySelector(".view-results-btn")) {
            let y = document.createElement("button");
            y.className = "btn purple view-results-btn",
            y.textContent = "查看结果",
            y.onclick = showResults,
            p.appendChild(y)
        }
    }
}
function updateSubProblems() {
    let e = document.getElementById("sub-problems");
    e.innerHTML = "";
    let t = Object.values(contestConfigs).find(e => e.name === currentContestName)
      , n = t && t.isIOI;
    if (!subProblems || !subProblems[currentProblem - 1])
        return;
    let r = subProblems[currentProblem - 1]
      , a = currentProblem - 1
      , o = problems[a]
      , s = o && o.isSubmitAnswer;
    if (s) {
        let i = document.createElement("div");
        i.className = "sub-problem";
        let l = isCodeComplete[a][0] ? subProblems[a][0].score : 0;
        i.innerHTML = `
                <h4>提交答案题 (最高分数: 100)</h4>
                <p>这是一道提交答案题，每次提交会获得一个随机分数。</p>
                <button class="btn purple" onclick="submitAnswerProblem(${a})" ${timePoints > 0 ? "" : "disabled"}>提交答案 (消耗1个时间点)</button>
                <p>当前最高得分: <span style="color: green;">${l}</span></p>
            `,
        e.appendChild(i);
        return
    }
    r.forEach( (t, r) => {
        let a = document.createElement("div");
        a.className = "sub-problem",
        thinkProgress[currentProblem - 1][r] >= calculateThinkTime(t) && (thinkProgress[currentProblem - 1][r] = calculateThinkTime(t));
        let o = []
          , s = Math.min(25 * Math.sqrt(playerStats.experience), 100)
          , i = () => 100 * Math.random() <= s;
        t.dp > 0 && o.push(`<span title="需要动态规划相关知识，数值越高难度越大">动态规划: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.dp}</span>`),
        t.ds > 0 && o.push(`<span title="需要数据结构相关知识，数值越高难度越大">数据结构: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.ds}</span>`),
        t.string > 0 && o.push(`<span title="需要字符串算法相关知识，数值越高难度越大">字符串: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.string}</span>`),
        t.graph > 0 && o.push(`<span title="需要图论相关知识，数值越高难度越大">图论: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.graph}</span>`),
        t.combinatorics > 0 && o.push(`<span title="需要组合计数相关知识，数值越高难度越大">组合计数: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.combinatorics}</span>`),
        t.geometry > 0 && o.push(`<span title="需要计算几何相关知识，数值越高难度越大">计算几何: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.geometry}</span>`),
        t.linearalgebra > 0 && o.push(`<span title="需要线性代数相关知识，数值越高难度越大">线性代数: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.linearalgebra}</span>`),
        t.calculus > 0 && o.push(`<span title="需要微积分相关知识，数值越高难度越大">微积分: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.calculus}</span>`),
        t.numerical > 0 && o.push(`<span title="需要数值方法相关知识，数值越高难度越大">数值方法: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.numerical}</span>`),
        t.probability > 0 && o.push(`<span title="需要概率论相关知识，数值越高难度越大">概率论: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.probability}</span>`),
        t.complexanalysis > 0 && o.push(`<span title="需要复分析相关知识，数值越高难度越大">复分析: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.complexanalysis}</span>`),
        t.linearprogramming > 0 && o.push(`<span title="需要线性规划相关知识，数值越高难度越大">线性规划: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.linearprogramming}</span>`),
        t.constant > 0 && o.push(`<span title="需要常数优化相关知识，数值越高难度越大">常数优化: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.constant}</span>`),
        t.matroid > 0 && o.push(`<span title="需要拟阵相关知识，数值越高难度越大">拟阵: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.matroid}</span>`),
        t.gametheory > 0 && o.push(`<span title="需要博弈论相关知识，数值越高难度越大">博弈论: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.gametheory}</span>`),
        t.construction > 0 && o.push(`<span title="需要构造相关知识，数值越高难度越大">构造: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.construction}</span>`),
        t.polynomial > 0 && o.push(`<span title="需要多项式相关知识，数值越高难度越大">多项式: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.polynomial}</span>`),
        t.numbertheory > 0 && o.push(`<span title="需要数论相关知识，数值越高难度越大">数论: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.numbertheory}</span>`),
        t.crypto > 0 && o.push(`<span title="需要密码学相关知识，数值越高难度越大">密码学: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.crypto}</span>`),
        t.adhoc > 0 && o.push(`<span title="需要特殊解法，数值越高难度越大">Adhoc: ${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : t.adhoc}</span>`),
        t.thinking > 0 && o.push(`<span title="题目思维难度，影响思考成功率">思维: ${t.thinking}</span>`),
        t.coding > 0 && o.push(`<span title="代码实现难度，影响写代码所需时间">代码: ${t.coding}</span>`),
        t.detail > 0 && o.push(`<span title="代码细节要求，影响代码实现成功率">细节: ${t.detail}</span>`),
        t.trap > 0 && o.push(`<span title="题目中的陷阱数量，增加代码出错概率">陷阱: ${t.trap}</span>`),
        t.independent > 0 && o.push(`<span title="独立部分分的思考进度不会影响其他部分分">独立: ${t.independent}</span>`),
        t.heat > 0 && o.push(`<span title="无效思考或无效代码会导致心态下降的程度">红温: ${t.heat}</span>`),
        t.blur > 0 && o.push(`<span title="题目难度未知，需要思考后才能显示">模糊: ${t.blur}</span>`),
        t.fallback > 0 && o.push(`<span title="对拍失败时额外回退代码进度的值">回退: ${t.fallback}</span>`),
        t.inspire > 0 && o.push(`<span title="代码完成时提升心态的值">激励: ${t.inspire}</span>`),
        a.innerHTML = `
                  <h4>部分分 ${r + 1} (分数: ${t.score})</h4>
                  <p>${o.join(", ")}</p>
                  <button class="blue ${thinkProgress[currentProblem - 1][r] >= calculateThinkTime(t) ? "completed" : ""}" onclick="thinkSubProblem(${currentProblem - 1}, ${r})" ${isCodeComplete[currentProblem - 1][r] || thinkProgress[currentProblem - 1][r] >= calculateThinkTime(t) ? "disabled" : ""}>思考 (<span>${thinkProgress[currentProblem - 1][r]}/${t.blur && thinkProgress[currentProblem - 1][r] < calculateThinkTime(t) && !i() ? "?" : calculateThinkTime(t)}</span>, 成功率: <span>${Math.round(100 * calculateThinkSuccessRate(t))}%</span>)</button>
                  <button class="blue ${codeProgress[currentProblem - 1][r] >= calculateCodeTime(t) ? "completed" : ""}" onclick="writeCodeSubProblem(${currentProblem - 1}, ${r})" ${thinkProgress[currentProblem - 1][r] >= calculateThinkTime(t) && !isCodeComplete[currentProblem - 1][r] && codeProgress[currentProblem - 1][r] < calculateCodeTime(t) ? "" : "disabled"}>写代码 (<span>${codeProgress[currentProblem - 1][r]}/${calculateCodeTime(t)}</span>, 成功率: <span>${Math.round(100 * calculateCodeSuccessRate(t))}%</span>)</button>
                  <button class="btn ${n ? "purple" : "blue"} ${isCodeComplete[currentProblem - 1][r] ? "completed" : ""}" onclick="checkCodeSubProblem(${currentProblem - 1}, ${r})" ${codeProgress[currentProblem - 1][r] >= calculateCodeTime(t) && !isCodeComplete[currentProblem - 1][r] && (n || timePoints > 0) ? "" : "disabled"}>${n ? "提交" : "对拍"} (出错概率: <span>${errorRates[currentProblem - 1][r] >= 0 ? `${Math.round(100 * errorRates[currentProblem - 1][r])}` : "?"}%</span>)</button>
                  ${!n && codeProgress[currentProblem - 1][r] >= calculateCodeTime(t) || n && isCodeComplete[currentProblem - 1][r] ? '<p style="color: green;">已完成</p>' : ""}
              `,
        e.appendChild(a)
    }
    )
}
function quicknessCurve(e) {
    return 0 == e ? 0 : 2 * e - 1
}
function calculateThinkTime(e) {
    let t = 1;
    return !0 == debugmode || (t += Math.pow(Math.max(0, e.dp - mapAttributeValue(playerStats.dp)), 2),
    t += Math.pow(Math.max(0, e.graph - mapAttributeValue(playerStats.graph)), 2),
    t += Math.pow(Math.max(0, e.combinatorics - mapAttributeValue(playerStats.combinatorics)), 2),
    t += Math.pow(Math.max(0, (e.linearalgebra || 0) - mapAttributeValue(playerStats.linearalgebra || 0)), 2),
    t += Math.pow(Math.max(0, (e.gametheory || 0) - mapAttributeValue(playerStats.gametheory || 0)), 2),
    t += Math.pow(Math.max(0, (e.construction || 0) - mapAttributeValue(playerStats.construction || 0)), 2),
    t += Math.pow(Math.max(0, (e.polynomial || 0) - mapAttributeValue(playerStats.polynomial || 0)), 2),
    t += Math.pow(Math.max(0, (e.numbertheory || 0) - mapAttributeValue(playerStats.numbertheory || 0)), 2),
    t += Math.pow(Math.max(0, (e.calculus || 0) - mapAttributeValue(playerStats.calculus || 0)), 2),
    t += Math.pow(Math.max(0, (e.numerical || 0) - mapAttributeValue(playerStats.numerical || 0)), 2),
    t += Math.pow(Math.max(0, (e.probability || 0) - mapAttributeValue(playerStats.probability || 0)), 2),
    t += Math.pow(Math.max(0, (e.complexanalysis || 0) - mapAttributeValue(playerStats.complexanalysis || 0)), 2),
    t += Math.pow(Math.max(0, (e.linearprogramming || 0) - mapAttributeValue(playerStats.linearprogramming || 0)), 2),
    t += Math.pow(Math.max(0, (e.matroid || 0) - mapAttributeValue(playerStats.matroid || 0)), 2),
    t += Math.pow(Math.max(0, (e.crypto || 0) - mapAttributeValue(playerStats.crypto || 0)), 2),
    t += Math.max(0, e.ds - mapAttributeValue(playerStats.ds)),
    t += Math.max(0, e.string - mapAttributeValue(playerStats.string)),
    t += e.adhoc,
    t += Math.max(0, e.thinking - mapAttributeValue(playerStats.thinking)),
    playerStats.quickness > 0 && (t = Math.max(1, t - quicknessCurve(playerStats.quickness)))),
    t
}
function calculateCodeTime(e) {
    if (!0 == debugmode)
        return 1;
    let t = e.coding;
    return t += Math.pow(Math.max(0, (e.geometry || 0) - mapAttributeValue(playerStats.geometry || 0)), 2),
    t += Math.pow(Math.max(0, e.ds - mapAttributeValue(playerStats.ds)), 2),
    t += Math.pow(Math.max(0, e.string - mapAttributeValue(playerStats.string)), 2),
    t += Math.max(0, e.dp - mapAttributeValue(playerStats.dp)),
    t += Math.max(0, e.graph - mapAttributeValue(playerStats.graph)),
    t += Math.max(0, e.combinatorics - mapAttributeValue(playerStats.combinatorics)),
    t += Math.max(0, (e.linearalgebra || 0) - mapAttributeValue(playerStats.linearalgebra || 0)),
    t += Math.max(0, (e.gametheory || 0) - mapAttributeValue(playerStats.gametheory || 0)),
    t += Math.max(0, (e.construction || 0) - mapAttributeValue(playerStats.construction || 0)),
    t += Math.max(0, (e.polynomial || 0) - mapAttributeValue(playerStats.polynomial || 0)),
    t += Math.max(0, (e.numbertheory || 0) - mapAttributeValue(playerStats.numbertheory || 0)),
    t += Math.max(0, (e.crypto || 0) - mapAttributeValue(playerStats.crypto || 0)),
    t += Math.pow(Math.max(0, (e.constant || 0) - mapAttributeValue(playerStats.constant || 0)), 2),
    playerStats.coding > 0 && (t = Math.max(1, t - playerStats.coding)),
    playerStats.quickness > 0 && (t = Math.max(1, t - quicknessCurve(playerStats.quickness))),
    t
}
function calculateThinkSuccessRate(e) {
    let t;
    switch (gameDifficulty) {
    case "easy":
        t = .9;
        break;
    case "normal":
        t = .85;
        break;
    case "hard":
    default:
        t = .8;
        break;
    case "expert":
        t = .75
    }
    return !0 == debugmode ? 1 : (t -= .05 * Math.max(0, e.thinking - mapAttributeValue(playerStats.thinking)),
    t -= .02 * Math.pow(Math.max(10 - mood, 0), 2) / (2 + playerStats.mental),
    Math.max(.01, Math.min(.99, t += .05 * playerStats.carefulness)))
}
function calculateCodeSuccessRate(e) {
    let t;
    switch (gameDifficulty) {
    case "easy":
        t = .9;
        break;
    case "normal":
        t = .85;
        break;
    case "hard":
    default:
        t = .8;
        break;
    case "expert":
        t = .75
    }
    return !0 == debugmode ? 1 : (t -= .02 * Math.pow(Math.max(10 - mood, 0), 2) / (2 + playerStats.mental),
    t += .05 * playerStats.carefulness,
    Math.max(.01, Math.min(.99, t -= .05 * Math.max(0, e.detail - mapAttributeValue(playerStats.coding)))))
}
function calculateErrorRate(e) {
    let t;
    switch (gameDifficulty) {
    case "easy":
        t = .15;
        break;
    case "normal":
    default:
        t = .2;
        break;
    case "hard":
        t = .3;
        break;
    case "expert":
        t = .35
    }
    return !0 == debugmode ? 0 : (t += .05 * e.trap,
    t -= .03 * playerStats.carefulness,
    Math.max(0, Math.min(.9, t += .02 * Math.pow(Math.max(10 - mood, 0), 2) / (2 + playerStats.mental))))
}
function proceedToAllocation() {
    document.getElementById("pre-story-panel").style.display = "none",
    document.getElementById("allocate-panel").style.display = "block",
    document.getElementById("log-panel").style.display = "none",
    document.getElementById("remaining-points").textContent = remainingPoints,
    document.getElementById("remaining-ability-points").textContent = remainingAbilityPoints
}
function startStory(e) {
    document.getElementById("story-panel").style.display = "block",
    document.getElementById("allocate-panel").style.display = "none",
    document.getElementById("log-panel").style.display = "block";
    let t = storyConfigs[e] || storyConfigs[1];
    document.querySelector("#story-panel h2").textContent = t.title,
    document.querySelector("#story-panel p").textContent = t.content,
    logEvent("游戏开始！", "normal"),
    logEvent("你已完成天赋分配，即将开始NOIP比赛。", "normal")
}
function startGame() {
    document.getElementById("allocate-panel").style.display = "none",
    document.getElementById("game-interface").style.display = "block",
    document.getElementById("story-panel").style.display = "none",
    document.getElementById("log-panel").style.display = "block";
    let e = 1 + extraMoodDrop;
    playerStats.mental > 0 && (e = Math.max(e - playerStats.mental, 0)),
    mood = Math.max(0, mood + e),
    logEvent("NOIP正式开始！", "normal"),
    logEvent("你坐在考场中，深吸一口气，准备迎接挑战...", "normal"),
    logEvent(`进入考场，心态值+${e}，当前心态值：${mood}`, "normal"),
    logEvent("请合理分配时间，仔细思考每个部分分。", "normal"),
    document.getElementById("player-mood").textContent = mood,
    updateStatus()
}
function confirmAllocation() {
    let e = {
        dp: document.getElementById("dp").value,
        ds: document.getElementById("ds").value,
        string: document.getElementById("string").value,
        graph: document.getElementById("graph").value,
        combinatorics: document.getElementById("combinatorics").value,
        geometry: document.getElementById("geometry").value,
        linearalgebra: document.getElementById("linearalgebra").value,
        calculus: document.getElementById("calculus").value,
        numerical: document.getElementById("numerical").value,
        probability: document.getElementById("probability").value,
        complexanalysis: document.getElementById("complexanalysis").value,
        linearprogramming: document.getElementById("linearprogramming").value,
        constant: document.getElementById("constant").value,
        matroid: document.getElementById("matroid").value,
        gametheory: document.getElementById("gametheory").value,
        construction: document.getElementById("construction").value,
        polynomial: document.getElementById("polynomial").value,
        numbertheory: document.getElementById("numbertheory").value,
        crypto: document.getElementById("crypto").value
    }
      , t = {
        thinking: document.getElementById("thinking").value,
        coding: document.getElementById("coding").value,
        carefulness: document.getElementById("carefulness").value,
        experience: document.getElementById("experience").value,
        quickness: document.getElementById("quickness").value,
        mental: document.getElementById("mental").value
    };
    for (let[n,r] of Object.entries(e))
        if (!r || "" === r.trim()) {
            alert(`${getStatName(n)}不能为空！`);
            return
        }
    for (let[a,o] of Object.entries(t))
        if (!o || "" === o.trim()) {
            alert(`${getStatName(a)}不能为空！`);
            return
        }
    let s = {};
    for (let[i,l] of Object.entries(e)) {
        let c = parseInt(l);
        if (isNaN(c) || !Number.isInteger(c) || c.toString() !== l.trim()) {
            alert(`${getStatName(i)}必须是整数！`);
            return
        }
        s[i] = c
    }
    let p = {};
    for (let[m,y] of Object.entries(t)) {
        let d = parseInt(y);
        if (isNaN(d) || !Number.isInteger(d) || d.toString() !== y.trim()) {
            alert(`${getStatName(m)}必须是整数！`);
            return
        }
        p[m] = d
    }
    for (let[f,$] of Object.entries(s))
        if ($ < 0 || $ > 20) {
            alert(`${getStatName(f)}必须在 0-20 之间！`);
            return
        }
    for (let[u,g] of Object.entries(p))
        if (g < 0 || g > 10) {
            alert(`${getStatName(u)}必须在 0-10 之间！`);
            return
        }
    let x = Object.values(s).reduce( (e, t) => e + t, 0);
    if (x > remainingPoints && !1 == debugmode) {
        alert("知识点分配超过限制！");
        return
    }
    let h = Object.values(p).reduce( (e, t) => e + t, 0);
    if (h > remainingAbilityPoints && !1 == debugmode) {
        alert("能力点分配超过限制！");
        return
    }
    if (x < remainingPoints) {
        alert("请分配完所有知识点！");
        return
    }
    if (h < remainingAbilityPoints) {
        alert("请分配完所有能力点！");
        return
    }
    playerStats.dp = s.dp,
    playerStats.ds = s.ds,
    playerStats.string = s.string,
    playerStats.graph = s.graph,
    playerStats.combinatorics = s.combinatorics,
    playerStats.geometry = s.geometry,
    playerStats.linearalgebra = s.linearalgebra,
    playerStats.calculus = s.calculus,
    playerStats.numerical = s.numerical,
    playerStats.probability = s.probability,
    playerStats.complexanalysis = s.complexanalysis,
    playerStats.linearprogramming = s.linearprogramming,
    playerStats.constant = s.constant,
    playerStats.matroid = s.matroid,
    playerStats.gametheory = s.gametheory,
    playerStats.construction = s.construction,
    playerStats.polynomial = s.polynomial,
    playerStats.numbertheory = s.numbertheory,
    playerStats.crypto = s.crypto,
    playerStats.thinking = p.thinking,
    playerStats.coding = p.coding,
    playerStats.carefulness = p.carefulness,
    playerStats.experience = p.experience,
    playerStats.quickness = p.quickness,
    playerStats.mental = p.mental,
    playerStats.culture = 0,
    document.getElementById("player-stats-panel").style.display = "block",
    document.getElementById("player-dp").textContent = playerStats.dp,
    document.getElementById("player-ds").textContent = playerStats.ds,
    document.getElementById("player-string").textContent = playerStats.string,
    document.getElementById("player-graph").textContent = playerStats.graph,
    document.getElementById("player-combinatorics").textContent = playerStats.combinatorics,
    document.getElementById("player-geometry").textContent = playerStats.geometry,
    document.getElementById("player-linearalgebra").textContent = playerStats.linearalgebra,
    document.getElementById("player-calculus").textContent = playerStats.calculus,
    document.getElementById("player-numerical").textContent = playerStats.numerical,
    document.getElementById("player-probability").textContent = playerStats.probability,
    document.getElementById("player-complexanalysis").textContent = playerStats.complexanalysis,
    document.getElementById("player-linearprogramming").textContent = playerStats.linearprogramming,
    document.getElementById("player-constant").textContent = playerStats.constant,
    document.getElementById("player-matroid").textContent = playerStats.matroid,
    document.getElementById("player-numbertheory").textContent = playerStats.numbertheory,
    document.getElementById("player-gametheory").textContent = playerStats.gametheory,
    document.getElementById("player-construction").textContent = playerStats.construction,
    document.getElementById("player-polynomial").textContent = playerStats.polynomial,
    document.getElementById("player-experience").textContent = playerStats.experience,
    document.getElementById("player-thinking").textContent = playerStats.thinking,
    document.getElementById("player-coding").textContent = playerStats.coding,
    document.getElementById("player-carefulness").textContent = playerStats.carefulness,
    document.getElementById("player-mood").textContent = mood,
    document.getElementById("player-mental").textContent = playerStats.mental,
    document.getElementById("player-crypto").textContent = playerStats.crypto,
    startTrainingEvents(10)
}
function switchProblem() {
    currentProblem = currentProblem % totalProblems + 1,
    updateStatus()
}
function prevProblem() {
    currentProblem = currentProblem > 1 ? currentProblem - 1 : totalProblems,
    updateStatus()
}
function nextProblem() {
    currentProblem = currentProblem < totalProblems ? currentProblem + 1 : 1,
    updateStatus()
}
function thinkSubProblem(e, t) {
    if (timePoints <= 0) {
        alert("时间点不足，无法思考！");
        return
    }
    let n = subProblems[e][t]
      , r = 0;
    if (Math.random() < (r = 1 - calculateThinkSuccessRate(n))) {
        if (logEvent(`T${e + 1} 部分分 ${t + 1} 思考无效，未取得进展！`, "think"),
        n.heat > 0) {
            let a = Math.floor(Math.random() * (n.heat + 1));
            a > 0 && (playerStats.mental > 0 && (a = Math.max(a + playerStats.mental, 0)),
            mood = Math.max(0, mood + a),
            logEvent(`由于红温效应，心态值增加${a}点！`, "think"),
            document.getElementById("player-mood").textContent = mood)
        }
    } else if (thinkProgress[e][t] += 1,
    logEvent(`T${e + 1} 部分分 ${t + 1} 思考成功！`, "think"),
    0 === n.independent)
        for (let o = 0; o < t; o++)
            0 === subProblems[e][o].independent && (thinkProgress[e][o] += 1,
            logEvent(`T${e + 1} 部分分 ${o + 1} 因非独立关系，思考进度 +1！`, "think"));
    lastActions.push("think"),
    lastActions.length > 5 && lastActions.shift(),
    triggerRandomEvent(e, t),
    document.getElementById("player-mood").textContent = mood,
    timePoints -= 1,
    updateStatus()
}
function writeCodeSubProblem(e, t) {
    if (timePoints <= 0) {
        alert("时间点不足，无法写代码！");
        return
    }
    let n = subProblems[e][t];
    if (Math.random() < 1 - calculateCodeSuccessRate(n)) {
        if (logEvent(`T${e + 1} 部分分 ${t + 1} 写代码无效，未取得进展！`, "code"),
        n.heat > 0) {
            let r = n.heat;
            playerStats.mental > 0 && (r = Math.max(r - playerStats.mental, 0)),
            mood = Math.max(0, mood - r),
            logEvent(`由于红温效应，心态值降低${r}点！`, "code"),
            document.getElementById("player-mood").textContent = mood
        }
    } else
        codeProgress[e][t] += 1,
        currentCodeProgress = codeProgress[e][t],
        logEvent(`T${e + 1} 部分分 ${t + 1} 写代码成功！`, "code"),
        codeProgress[e][t] === calculateCodeTime(n) && (errorRates[e][t] = calculateErrorRate(n));
    if (lastActions.push("code"),
    lastActions.length > 5 && lastActions.shift(),
    triggerRandomEvent(e, t),
    document.getElementById("player-mood").textContent = mood,
    timePoints -= 1,
    updateStatus(),
    codeProgress[e][t] >= calculateCodeTime(n) && n.inspire > 0) {
        let a = n.inspire;
        mood = Math.min(256, mood + a),
        logEvent(`完成代码带来了激励效果，心态值提升${a}点！`, "code"),
        document.getElementById("player-mood").textContent = mood
    }
}
function checkCodeSubProblem(e, t) {
    let n = Object.values(contestConfigs).find(e => e.name === currentContestName)
      , r = n && n.isIOI
      , a = problems[e];
    if (a && a.isSubmitAnswer) {
        submitAnswerProblem(e);
        return
    }
    if (!r && timePoints <= 0) {
        alert("时间点不足！");
        return
    }
    r || (timePoints--,
    hasCheckedSubProblem[e][t] = !0,
    logEvent(`消耗了 1 个时间点，剩余 ${timePoints} 个时间点`, "check")),
    lastActions.push("check"),
    lastActions.length > 5 && lastActions.shift(),
    logEvent(`${r ? "提交" : "对拍"}第 ${e + 1} 题的第 ${t + 1} 个部分`, "check");
    let o = errorRates[e][t]
      , s = Math.random();
    if (logEvent(`调试信息：随机数=${s.toFixed(3)}，错误率=${o.toFixed(3)}`, "check"),
    s < o) {
        let i = subProblems[e][t];
        if (r) {
            let l = i.fallback + 1;
            codeProgress[e][t] = Math.max(0, codeProgress[e][t] - l),
            errorRates[e][t] /= 4,
            logEvent("提交失败！你的代码存在问题！", "check"),
            logEvent(`当前代码进度：${codeProgress[e][t]}/${calculateCodeTime(i)}`, "check"),
            logEvent(`当前心态值：${mood}`, "check")
        } else
            logEvent(`对拍失败！你可以修改代码重新对拍！`, "check"),
            logEvent(`当前心态值：${mood}`, "check")
    } else {
        let c = subProblems[e][t];
        isCodeComplete[e][t] = !0,
        mood = Math.min(256, mood + (c.inspire || 0)),
        logEvent(`${r ? "提交" : "对拍"}成功！获得 ${c.score} 分`, "check"),
        c.inspire && logEvent(`受到鼓舞，心态值+${c.inspire}`, "check"),
        logEvent(`当前心态值：${mood}`, "check")
    }
    updateStatus(),
    updateSubProblems(),
    triggerRandomEvent(e, t)
}
function showResults() {
    let e = document.querySelectorAll('.actions button[onclick="showResults"]');
    e.forEach(e => e.remove());
    let t = document.querySelectorAll("#leave-early-btn");
    t.forEach(e => e.remove());
    let n = document.querySelector(".result-panel");
    n && n.remove();
    let r = 0
      , a = 0
      , o = "<h3>比赛结果</h3>";
    for (let s = 0; s < totalProblems; s++) {
        let i = 0
          , l = 0
          , c = []
          , p = Object.values(contestConfigs).find(e => e.name === currentContestName)
          , m = p && p.isIOI;
        if (subProblems[s] && codeProgress[s] && isCodeComplete[s]) {
            for (let y = 0; y < subProblems[s].length; y++) {
                let d = subProblems[s][y];
                if (!d || !codeProgress[s] || !isCodeComplete[s])
                    continue;
                let f = codeProgress[s][y] >= calculateCodeTime(d)
                  , $ = isCodeComplete[s][y];
                if (f && (i = Math.max(i, d.score)),
                $)
                    l = Math.max(l, d.score);
                else if (f && !m) {
                    let u = 1 - errorRates[s][y];
                    for (let g = y; g >= 0; g--)
                        if (Math.random() < u) {
                            l = Math.max(l, subProblems[s][g].score);
                            break
                        }
                }
                c.push(`
                      <p>部分分 ${y + 1} (${d.score}分): 
                      ${$ ? m ? "提交通过" : "对拍通过" : f && !m ? `写完代码(通过概率: ${Math.round((1 - errorRates[s][y]) * 100)}%)` : "未完成"}</p>
                  `)
            }
            r += i,
            a += l,
            o += `
                  <div class="problem-result">
                      <h4>T${s + 1} (${problems[s].name}) 得分</h4>
                      <p>预期得分: ${i}</p>
                      <p>实际得分: ${l}</p>
                      <div class="sub-problem-results">
                          ${c.join("")}
                      </div>
                  </div>
              `
        }
    }
    o += `
              <div class="total-score">
                  <h4>总分</h4>
                  <p>预期总分: ${r}</p>
                  <p>实际总分: ${a}</p>
              </div>
          `;
    let x = "";
    if (playerStats.tempScore = a,
    "省选Day2" === currentContestName) {
        let h = a + playerStats.prevScore + (playerStats.noipScore || 0);
        playerStats.tempScore = h,
        x = `
                  <div class="total-score">
                      <h4>省选总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${a}</p>
                      <p>NOIP得分: ${playerStats.noipScore || 0}</p>
                      <p>最终总分: ${h.toFixed(1)} (Day1 + Day2 + NOIP)</p>
                  </div>
              `
    } else if ("NOI Day2" === currentContestName) {
        let _ = playerStats.noiScore0 + a + playerStats.prevScore;
        playerStats.isProvincialTeamA && (_ += 5),
        playerStats.tempScore = _,
        x = `
                  <div class="total-score">
                      <h4>NOI总分</h4>
                      <p>笔试得分: ${playerStats.noiScore0}</p>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${a}</p>
                      <p>基础总分: ${(playerStats.noiScore0 + a + playerStats.prevScore).toFixed(1)} (Day1 + Day2)</p>
                      ${playerStats.isProvincialTeamA ? '<p style="color: #4CAF50;">省队A队加分: +5</p>' : ""}
                      <p>最终总分: ${_.toFixed(1)}</p>
                  </div>
              `
    } else if ("IOI Day2" === currentContestName) {
        let v = a + playerStats.prevScore;
        playerStats.tempScore = v,
        x = `
                  <div class="total-score">
                      <h4>IOI总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${a}</p>
                      <p>基础总分: ${(a + playerStats.prevScore).toFixed(1)} (Day1 + Day2)</p>
                      <p>最终总分: ${v.toFixed(1)}</p>
                  </div>
              `
    } else if ("CTT Day4" === currentContestName) {
        let b = a + playerStats.prevScore1 + playerStats.prevScore2 + playerStats.prevScore3;
        playerStats.tempScore = b,
        playerStats.cttScore = b,
        x = `
                  <div class="total-score">
                      <h4>CTT总分</h4>
                      <p>Day1得分: ${playerStats.prevScore1}</p>
                      <p>Day2得分: ${playerStats.prevScore2}</p>
                      <p>Day3得分: ${playerStats.prevScore3}</p>
                      <p>Day4得分: ${a}</p>
                      <p>基础总分: ${(a + playerStats.prevScore1 + playerStats.prevScore2 + playerStats.prevScore3).toFixed(1)} (Day1 + Day2 + Day3 + Day4)</p>
                      <p>最终总分: ${b.toFixed(1)}</p>
                  </div>
              `
    } else if ("CTS Day2" === currentContestName) {
        let S = a + playerStats.prevScore + (playerStats.cttScore || 0);
        playerStats.tempScore = S,
        x = `
                  <div class="total-score">
                      <h4>CTS总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${a}</p>
                      <p>CTT得分: ${playerStats.cttScore || 0}</p>
                      <p>基础总分: ${(a + playerStats.prevScore + (playerStats.cttScore || 0)).toFixed(1)} (Day1 + Day2 + CTT)</p>
                      <p>最终总分: ${S.toFixed(1)}</p>
                  </div>
              `
    }
    o += x;
    let P = Math.min(5 + (playerStats.mental || 0), 10);
    if (mood < P) {
        let E = P - mood;
        o += `
                  <div class="determination-reward">
                      <h4>心态恢复</h4>
                      <p>比赛结束后心态自动恢复：+${E}</p>
                      <p>当前心态值：${mood = P}</p>
                  </div>
              `,
        logEvent(`比赛结束后心态自动恢复：+${E}，当前心态值：${mood}`, "event")
    }
    let C = 5
      , I = playerStats.tempScore;
    isNaN(I) && (console.error("Error: totalContestScore is NaN"),
    I = 0);
    let T = !1;
    if ("省选Day1" !== currentContestName && "NOI Day1" !== currentContestName && "IOI Day1" !== currentContestName && "CTT Day1" !== currentContestName && "CTS Day1" !== currentContestName && "CTT Day2" !== currentContestName && "CTT Day3" !== currentContestName && "NOI Day0" !== currentContestName) {
        T = !0;
        let k;
        "省选Day2" === currentContestName ? (I = a + playerStats.prevScore,
        k = calculateAward("省选", a, playerStats.prevScore),
        playerStats.isProvincialTeam = k.includes("省队"),
        C = "省队A队" == k ? 20 : "省队B队" == k ? 10 : 5) : "NOI Day2" === currentContestName ? (I = a + playerStats.prevScore,
        C = "金牌" == (k = calculateAward("NOI", a, playerStats.prevScore)) ? 20 : "银牌" == k ? 12 : "铜牌" == k ? 10 : 5) : "IOI Day2" === currentContestName ? k = calculateAward("IOI", a, playerStats.prevScore) : "CTT Day4" === currentContestName ? C = "入选候选队" == (k = calculateAward("CTT", a, playerStats.prevScore)) ? 10 : 5 : "CTS Day2" === currentContestName ? C = "入选国家队" == (k = calculateAward("CTS", a, playerStats.prevScore)) ? 20 : 10 : ("金牌" == (k = calculateAward(currentContestName, a)) ? C = 15 : "银牌" == k ? C = 12 : "铜牌" == k && (C = 10),
        "一等奖" == k ? C = 10 : "二等奖" == k ? C = 8 : "三等奖" == k && (C = 6)),
        "CSP-S" === currentContestName ? playerStats.cspScore = a : "NOIP" === currentContestName && (playerStats.noipScore = a),
        o += `
                  <div class="award-result">
                      <h4>获奖情况</h4>
                      <p class="award ${k.includes("金") || k.includes("一") || k.includes("A") ? "gold" : k.includes("银") || k.includes("二") || k.includes("B") ? "silver" : k.includes("铜") || k.includes("三") ? "bronze" : "none"}">
                          ${k}
                      </p>
                  </div>
              `
    } else
        playerStats.prevScore = a,
        "CTT Day1" === currentContestName ? playerStats.prevScore1 = a : "CTT Day2" === currentContestName ? playerStats.prevScore2 = a : "CTT Day3" === currentContestName ? playerStats.prevScore3 = a : "NOI Day0" === currentContestName && (playerStats.noiScore0 = a);
    if (T) {
        let O = Math.floor(I * C);
        playerStats.determination += O,
        o += `
    <div class="determination-reward">
        <h4>决心奖励</h4>
        <p>获得决心: +${O} (${I}分 \xd7 ${C})</p>
        <p>当前决心: ${playerStats.determination}</p>
    </div>
  `
    }
    let D = document.createElement("div");
    D.className = "result-panel",
    D.innerHTML = o;
    let B = document.createElement("button");
    B.className = "btn blue",
    B.textContent = "继续",
    B.onclick = () => {
        D.remove(),
        handlePhaseTransition()
    }
    ,
    updateStatus(),
    D.appendChild(B),
    document.querySelector(".game-interface").style.display = "none",
    document.querySelector(".game-panel").appendChild(D),
    logEvent("比赛结束！", "event"),
    logEvent(`预期总分：${r}，实际总分：${a}`, "event")
}
let remainingEvents = 5
  , totalTrainingEvents = 5
  , currentPhase = 1;
const abilityLimit = 100;
function selectTrainingOption(e, t, n) {
    if (e.cost && playerStats.determination < currentShopPrices[e.text]) {
        alert(`决心不足！需要${currentShopPrices[e.text]}点决心，当前只有${playerStats.determination}点。`),
        logEvent(`决心不足，无法购买！需要${currentShopPrices[e.text]}点决心。`, "event");
        return
    }
    if (logEvent(`选择了：${e.text || ""}`, "event"),
    e.description && logEvent(e.description, "event"),
    e.cost && (playerStats.determination -= currentShopPrices[e.text],
    logEvent(`消耗了${currentShopPrices[e.text]}点决心`, "event")),
    e.effects && "object" == typeof e.effects && (Object.entries(e.effects).forEach( ([t,n]) => {
        if ("random" === t) {
            let r = n[Math.floor(Math.random() * n.length)];
            playerStats[r] = Math.max(0, Math.min(100, (playerStats[r] || 0) + 1)),
            logEvent(`随机提升：${getStatName(r)}+1`, "event")
        } else
            "mood" === t ? "缓和心态" === e.text ? (mood = 8 + playerStats.mental,
            logEvent(`心态调整到${8 + playerStats.mental}`, "event")) : (mood = Math.max(0, Math.min(256, mood + n)),
            logEvent(`心态${n > 0 ? "+" : ""}${n}`, "event"),
            logEvent(`当前心态值：${mood}`, "event")) : "determination" === t ? playerStats.determination = Math.max(0, playerStats.determination + n) : playerStats.hasOwnProperty(t) && (playerStats[t] = Math.max(0, Math.min(100, playerStats[t] + n)))
    }
    ),
    updateStatus(),
    document.getElementById("player-determination").textContent = playerStats.determination,
    Object.entries(e.effects).forEach( ([e,t]) => {
        "random" !== e && "mood" !== e && null != t && logEvent(`${getStatName(e)} ${t > 0 ? "+" : ""}${t}`, "event")
    }
    )),
    e.effects && e.effects.mood || logEvent(`当前心态值：${mood}`, "event"),
    logEvent(`当前决心值：${playerStats.determination}`, "event"),
    logEvent("------------------------", "event"),
    t) {
        if (e.cost) {
            if (shopPriceIncrements[gameDifficulty][e.text]) {
                let r = currentShopPrices[e.text] + shopPriceIncrements[gameDifficulty][e.text];
                currentShopPrices[e.text] = r,
                logEvent(`下次购买${e.text}需要${r}点决心`, "event")
            }
            purchasedItems.add(e.text);
            let a = document.querySelectorAll(".event-option");
            a.forEach(t => {
                let n = t.querySelector("h3");
                n && n.textContent === e.text && (t.style.opacity = "0.6",
                t.style.cursor = "not-allowed",
                t.onclick = null,
                t.classList.add("purchased"))
            }
            )
        }
        "放弃购买" === e.text && (purchasedItems.clear(),
        --remainingEvents <= 0 ? handlePhaseTransition() : showNextTrainingEvent())
    } else if (e.nextEvent)
        logEvent(`触发跳转事件：${e.nextEvent}`, "event"),
        showTrainingEvent(e.nextEvent);
    else if (e.getNextEventProbability) {
        let o = e.getNextEventProbability()
          , s = Math.random()
          , i = 0;
        for (let[l,c] of Object.entries(o))
            if (s < (i += c)) {
                logEvent(`触发概率跳转事件：${l}（概率：${Math.round(100 * c)}%）`, "event"),
                showTrainingEvent(l);
                return
            }
        --remainingEvents <= 0 ? handlePhaseTransition() : showNextTrainingEvent()
    } else if (e.nextEventProbability) {
        let p = Math.random()
          , m = 0;
        for (let[y,d] of Object.entries(e.nextEventProbability))
            if (p < (m += d)) {
                logEvent(`触发概率跳转事件：${y}（概率：${Math.round(100 * d)}%）`, "event"),
                showTrainingEvent(y);
                return
            }
        --remainingEvents <= 0 ? handlePhaseTransition() : showNextTrainingEvent()
    } else
        --remainingEvents <= 0 ? handlePhaseTransition() : showNextTrainingEvent()
}
function showSubEvent(e) {
    let t = eventSystem.sub[e];
    if (!t)
        return;
    logEvent(`触发次事件：${t.title}`, "event"),
    logEvent(t.description, "event");
    let n = document.getElementById("event-options");
    n.innerHTML = `
              <h3>${t.title}</h3>
              <p>${t.description}</p>
              <div class="event-options">
                  ${t.options.map( (e, t) => `
                      <div class="event-option" onclick="selectSubOption(${JSON.stringify(e).replace(/"/g, "&quot;")})" id="option-${t}">
                          <h3>${e.text}</h3>
                          <p>${e.description}</p>
                          <div class="event-effects">
                              效果：${Object.entries(e.effects).map( ([e,t]) => `${getStatName(e)} ${t > 0 ? "+" : ""}${t}`).join("、")}
                          </div>
                      </div>
                  `).join("")}
              </div>
          `
}
function selectSubOption(e) {
    logEvent(`选择了：${e.text}`, "event"),
    logEvent(e.description, "event"),
    Object.entries(e.effects).forEach( ([e,t]) => {
        "mood" === e ? mood = Math.max(0, Math.min(256, mood + t)) : playerStats.hasOwnProperty(e) && (playerStats[e] = Math.max(0, Math.min(100, playerStats[e] + t)))
    }
    ),
    updateStatus(),
    Object.entries(e.effects).forEach( ([e,t]) => {
        logEvent(`${getStatName(e)} ${t > 0 ? "+" : ""}${t}`, "event")
    }
    ),
    logEvent(`当前心态值：${mood}`, "event"),
    logEvent("------------------------", "event"),
    e.nextEvent ? showSubEvent(e.nextEvent) : (remainingEvents--,
    showNextTrainingEvent())
}
function startContest(e) {
    document.getElementById("contest-name").textContent = ({
        "CSP-S": "CSP-S",
        NOIP: "NOIP",
        WC: "WC",
        省选Day1: "省选Day1",
        省选Day2: "省选Day2",
        APIO: "APIO",
        "NOI Day0": "NOI 笔试",
        "NOI Day1": "NOI Day1",
        "NOI Day2": "NOI Day2",
        "CTT Day1": "CTT Day1",
        "CTT Day2": "CTT Day2",
        "CTT Day3": "CTT Day3",
        "CTT Day4": "CTT Day4",
        "CTS Day1": "CTS Day1",
        "CTS Day2": "CTS Day2",
        "IOI Day1": "IOI Day1"
    })[e];
    let t;
    switch (e) {
    case "CSP-S":
        t = contestConfigs[1];
        break;
    case "NOIP":
        t = contestConfigs[2];
        break;
    case "WC":
        t = contestConfigs[3];
        break;
    case "省选Day1":
        t = contestConfigs[4];
        break;
    case "省选Day2":
        t = contestConfigs[5];
        break;
    case "APIO":
        t = contestConfigs[6];
        break;
    case "NOI Day0":
        t = contestConfigs[101];
        break;
    case "NOI Day1":
        t = contestConfigs[7];
        break;
    case "NOI Day2":
        t = contestConfigs[8];
        break;
    case "CTT Day1":
        t = contestConfigs[9];
        break;
    case "CTT Day2":
        t = contestConfigs[10];
        break;
    case "CTT Day3":
        t = contestConfigs[11];
        break;
    case "CTT Day4":
        t = contestConfigs[12];
        break;
    case "CTS Day1":
        t = contestConfigs[13];
        break;
    case "CTS Day2":
        t = contestConfigs[14];
        break;
    case "IOI Day1":
        t = contestConfigs[15];
        break;
    case "IOI Day2":
        t = contestConfigs[16]
    }
    timePoints = t.timePoints,
    currentContestName = t.name,
    isIOIMode = t.isIOI || !1;
    let n = document.querySelector('.actions button[onclick="showResults"]');
    n && n.remove();
    let r = document.querySelector("#leave-early-btn");
    r && r.remove();
    let a = document.querySelector(".result-panel");
    a && a.remove();
    let o = document.querySelector(".actions");
    for (; o.firstChild; )
        o.removeChild(o.firstChild);
    let s = document.createElement("button");
    s.id = "prev-problem-btn",
    s.className = "btn purple",
    s.onclick = prevProblem,
    s.textContent = "上一题",
    o.appendChild(s);
    let i = document.createElement("button");
    for (i.id = "next-problem-btn",
    i.className = "btn purple",
    i.onclick = nextProblem,
    i.textContent = "下一题",
    o.appendChild(i),
    document.getElementById("training-event-panel").style.display = "none",
    document.getElementById("game-interface").style.display = "block",
    currentProblem = 1,
    subProblems = [],
    thinkProgress = [],
    codeProgress = [],
    isCodeComplete = [],
    errorRates = [],
    hasCheckedSubProblem = [],
    lastActions = [],
    currentCodeProgress = 0,
    totalProblems = t.problemRanges.length; ; ) {
        problems = [];
        let l = !0;
        for (let c = 0; c < totalProblems; c++) {
            let p;
            for (let m of (p = "IOI Day1" == e || "IOI Day2" == e || "APIO" == e ? selectIOIProblemFromRange(t.problemRanges[c].minLevel, t.problemRanges[c].maxLevel) : selectProblemFromRange(t.problemRanges[c].minLevel, t.problemRanges[c].maxLevel),
            problems))
                if (m.name == p.name) {
                    l = !1;
                    break
                }
            if (!l)
                break;
            problems.push(p)
        }
        if (l)
            break
    }
    for (let y of problems)
        subProblems.push(y.parts),
        thinkProgress.push(Array(y.parts.length).fill(0)),
        codeProgress.push(Array(y.parts.length).fill(0)),
        isCodeComplete.push(Array(y.parts.length).fill(!1)),
        errorRates.push(Array(y.parts.length).fill(-1)),
        hasCheckedSubProblem.push(Array(y.parts.length).fill(!1));
    logEvent(`${e}比赛正式开始！`, "event"),
    logEvent(`你坐在考场中，深吸一口气，准备迎接挑战...`, "event");
    let d = extraMoodDrop;
    "WC" == e || "APIO" == e ? d -= 1 : "NOIP" == e || "省选Day1" == e || "CTT Day1" == e || "CTT Day2" == e ? d += 1 : "NOI Day1" == e || "省选Day2" == e || "CTT Day3" == e || "CTS Day4" == e ? d += 2 : "NOI Day2" == e ? d += 3 : "IOI Day1" == e ? d += 4 : "IOI Day2" == e && (d += 5),
    currentPhase >= 16 && (d = Math.ceil(1.5 * d)),
    playerStats.mental > 0 && (d = Math.max(0, d + playerStats.mental)),
    mood = Math.max(0, mood + d),
    document.getElementById("player-mood").textContent = mood,
    logEvent(`进入考场，心态值+${d}（心理素质减少了${playerStats.mental || 0}点心态下降），当前心态值：${mood}`, "event"),
    logEvent("请合理分配时间，仔细思考每个部分分。", "event"),
    updateStatus()
}
function getStatName(e) {
    return ({
        dp: "动态规划",
        ds: "数据结构",
        string: "字符串",
        graph: "图论",
        combinatorics: "组合计数",
        geometry: "计算几何",
        linearalgebra: "线性代数",
        calculus: "微积分",
        numerical: "数值方法",
        probability: "概率论",
        complexanalysis: "复分析",
        linearprogramming: "线性规划",
        constant: "常数优化",
        matroid: "拟阵",
        thinking: "思维",
        coding: "代码",
        carefulness: "细心",
        mood: "心态",
        determination: "决心",
        quickness: "迅捷",
        mental: "心理素质",
        culture: "文化课",
        experience: "经验",
        polynomial: "多项式",
        numbertheory: "数论",
        construction: "构造",
        gametheory: "博弈论",
        crypto: "密码学"
    })[e] || e
}
function leaveShop() {
    logEvent("离开商店", "event"),
    remainingEvents--,
    showNextTrainingEvent()
}
function startNormalMode() {
    gameDifficulty = "easy",
    currentShopPrices = getInitialShopPrices("easy"),
    document.getElementById("start-screen").style.display = "none",
    document.getElementById("pre-story-panel").style.display = "block",
    document.getElementById("log-panel").style.display = "none",
    document.getElementById("pre-story-title").textContent = "我重生了？",
    document.getElementById("pre-story-content").innerHTML = `
              <p>参加完 2077 年的省队选拔后，高二的你意识到自己无缘今年省队了。也许从此就和 OI 无缘了。</p>
              <p>你躺在床上，闭上眼，回想起自己曾经在 OI 赛场上挥洒汗水的场景。</p>
              <p>眼泪还是流了出来。你不甘心，你觉得你还可以做得更好。</p>
              <p>你突然惊醒，发现自己回到了高一前的暑假。</p>
              <p>之前经历的一切仿佛是一场梦，却又那么真实。</p>
              <p>你意识到，这一次，你还有机会。</p>
              <p>你决定，这一次，让 OI 生涯不留遗憾。</p>
              <p>你充满了决心。</p>
              <div style="margin-top: 30px; text-align: center;">
                  <button onclick="proceedToAllocation()" class="btn" style="font-size: 16px; padding: 8px 20px;">开始训练</button>
              </div>
          `;
    let e = document.querySelector(".story-content");
    e && (e.style.borderLeft = "none",
    e.style.paddingLeft = "0"),
    timePoints = 24,
    mood = 10,
    currentProblem = 1,
    totalProblems = 0,
    remainingPoints = 15,
    remainingAbilityPoints = 10,
    currentContestName = "NOIP普及组",
    playerStats = {
        dp: 0,
        ds: 0,
        string: 0,
        graph: 0,
        combinatorics: 0,
        geometry: 0,
        linearalgebra: 0,
        calculus: 0,
        numerical: 0,
        probability: 0,
        complexanalysis: 0,
        linearprogramming: 0,
        constant: 0,
        matroid: 0,
        thinking: 0,
        coding: 0,
        carefulness: 0,
        experience: 0,
        determination: 500,
        achievements: [],
        crypto: 0
    },
    gameLog = [],
    document.getElementById("log").innerHTML = "",
    logEvent("选择了正常模式", "event"),
    logEvent(`初始知识点：${remainingPoints}`, "event"),
    logEvent(`初始能力点：${remainingAbilityPoints}`, "event"),
    logEvent(`初始决心：${playerStats.determination}`, "event"),
    logEvent(`初始心态：${mood}`, "event"),
    updateStatus(),
    document.getElementById("remaining-points").textContent = remainingPoints
}
function startTrainingEvents(e) {
    document.getElementById("training-event-panel").style.display = "block",
    document.getElementById("allocate-panel").style.display = "none",
    document.getElementById("log-panel").style.display = "block",
    totalTrainingEvents = e,
    remainingEvents = e,
    showNextTrainingEvent(),
    logEvent("训练阶段开始！", "event"),
    logEvent(`你还有${remainingEvents}次训练机会。`, "event")
}
function showTrainingEvent(e) {
    let t = eventSystem.training[e];
    if (!t) {
        console.error("Event not found:", e);
        return
    }
    "决心商店" === e && purchasedItems.clear();
    let n = document.getElementById("training-event-panel");
    if (!n) {
        console.error("Training event panel not found");
        return
    }
    n.style.display = "block";
    let r = n.querySelector("h2");
    if (!r) {
        console.error("Title element not found");
        return
    }
    let a = n.querySelector(".event-subtitle");
    a || ((a = document.createElement("h3")).className = "event-subtitle",
    a.style.fontSize = "18px",
    a.style.color = "#666",
    a.style.marginTop = "5px",
    r.parentNode.insertBefore(a, r.nextSibling));
    let o = "";
    switch (currentPhase) {
    case 1:
    case 17:
        o = "CSP-S";
        break;
    case 3:
    case 19:
        o = "NOIP";
        break;
    case 5:
    case 29:
        o = "WC";
        break;
    case 7:
    case 31:
        o = "省选Day1";
        break;
    case 9:
    case 33:
        o = "省选Day2";
        break;
    case 11:
    case 35:
        o = "APIO";
        break;
    case 13:
    case 38:
        o = "NOI Day1";
        break;
    case 15:
    case 40:
        o = "NOI Day2";
        break;
    case 21:
    case 45:
        o = "CTT";
        break;
    case 26:
    case 50:
        o = "CTS";
        break;
    case 42:
    case 53:
        o = "IOI"
    }
    let s = Math.min(totalTrainingEvents, Math.max(1, totalTrainingEvents - remainingEvents + 1));
    r.textContent = `${o}比赛即将到来（${s}/${totalTrainingEvents}）`,
    a.textContent = t.title;
    let i = n.querySelector("#event-description");
    if (!i) {
        let l = document.createElement("div");
        l.id = "event-description",
        l.style.margin = "10px 0",
        l.style.fontSize = "16px",
        l.style.color = "#333",
        l.style.padding = "10px",
        l.style.backgroundColor = "#f5f5f5",
        l.style.borderRadius = "5px",
        n.insertBefore(l, n.querySelector("#event-options"))
    }
    let c = n.querySelector("#event-description");
    c && (c.textContent = t.description);
    let p = document.getElementById("event-options");
    if (!p) {
        console.error("Options container not found");
        return
    }
    p.innerHTML = "";
    let m;
    if (t.isShop) {
        let y = getUpdatedShopOptions()
          , d = y.find(e => "放弃购买" === e.text)
          , f = y.filter(e => "放弃购买" !== e.text && !purchasedItems.has(e.text));
        m = shuffleArray(f).slice(0, t.optionsToShow - 1),
        d && m.push(d)
    } else
        m = shuffleArray(t.options).slice(0, t.optionsToShow);
    m.forEach(e => {
        let n = document.createElement("div");
        n.className = "event-option";
        let r = document.createElement("h3");
        r.textContent = e.text;
        let a = document.createElement("p");
        a.textContent = e.description || "";
        let o = document.createElement("div");
        if (o.className = "event-effects",
        e.cost) {
            let s = currentShopPrices[e.text];
            o.innerHTML = `花费：${s}决心<br>`
        }
        let i = "效果：";
        if (e.effects && "object" == typeof e.effects && Object.keys(e.effects).length > 0) {
            let l = [];
            Object.entries(e.effects).forEach( ([t,n]) => {
                "random" === t ? l.push(`随机提升一项算法能力+1`) : "mood" === t && "缓和心态" === e.text ? l.push(`调整心态到${n}`) : null != n && l.push(`${getStatName(t)} ${n > 0 ? "+" : ""}${n}`)
            }
            ),
            i += l.join("、")
        }
        e.nextEvent || e.nextEventProbability || e.probabilityEffects ? i += "效果：" === i ? "？" : "、？" : "效果：" === i && (i += "无"),
        o.innerHTML += i,
        n.appendChild(r),
        n.appendChild(a),
        n.appendChild(o);
        let c = t.isShop && e.cost && purchasedItems.has(e.text);
        c ? (n.style.opacity = "0.6",
        n.style.cursor = "not-allowed",
        n.classList.add("purchased")) : n.onclick = () => {
            t.isShop && e.cost && purchasedItems.add(e.text),
            selectTrainingOption(e, t.isShop, t.type)
        }
        ,
        p.appendChild(n)
    }
    ),
    logEvent(`触发事件：${t.title}`, "event")
}
function showNextTrainingEvent() {
    if (remainingEvents <= 0) {
        handlePhaseTransition();
        return
    }
    let e, t = totalTrainingEvents - remainingEvents + 1;
    1 === currentPhase ? 1 === t ? e = "长期训练" : 2 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 3 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 4 === t ? e = .5 > Math.random() ? "提升训练" : "遗忘" : 5 === t ? e = .5 > Math.random() ? "焦虑" : "比赛训练" : 6 === t ? e = .5 > Math.random() ? "娱乐时间" : "刷题训练" : 7 === t ? e = .5 > Math.random() ? "提升训练" : "不务正业" : 8 === t ? e = .5 > Math.random() ? "阅读博客" : "比赛训练" : 9 === t ? e = .5 > Math.random() ? "娱乐时间" : "遗忘" : 10 === t && (e = "赛前一天") : 16 == currentPhase ? 1 === t ? e = "步入高二" : 2 === t ? e = "长期训练" : 3 === t || 4 === t || 6 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 5 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 7 === t ? e = "焦虑" : 8 === t && (e = "赛前一天") : 2 == totalTrainingEvents ? 1 === t ? e = .5 > Math.random() ? "焦虑" : "不务正业" : 2 === t && (e = "赛前一天") : 4 == totalTrainingEvents ? 1 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 2 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 3 === t ? e = "焦虑" : 4 === t && (e = "赛前一天") : 5 == totalTrainingEvents ? 1 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 2 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 3 === t ? e = .5 > Math.random() ? "刷题训练" : "焦虑" : 4 === t ? e = "遗忘" : 5 === t && (e = "赛前一天") : 6 == totalTrainingEvents ? 1 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 2 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 3 === t ? e = .5 > Math.random() ? "提升训练" : "遗忘" : 4 === t ? e = .5 > Math.random() ? "不务正业" : "刷题训练" : 5 === t ? e = "焦虑" : 6 === t && (e = "赛前一天") : 7 == totalTrainingEvents ? 1 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 2 === t ? e = .5 > Math.random() ? "提升训练" : "阅读博客" : 3 === t ? e = .5 > Math.random() ? "焦虑" : "刷题训练" : 4 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 5 === t ? e = .5 > Math.random() ? "不务正业" : "比赛训练" : 6 === t ? e = .5 > Math.random() ? "娱乐时间" : "遗忘" : 7 === t && (e = "赛前一天") : 8 == totalTrainingEvents && (1 === t ? e = .5 > Math.random() ? "提升训练" : "比赛训练" : 2 === t ? e = .5 > Math.random() ? "娱乐时间" : "阅读博客" : 3 === t ? e = .5 > Math.random() ? "焦虑" : "提升训练" : 4 === t ? e = .5 > Math.random() ? "不务正业" : "比赛训练" : 5 === t ? e = .5 > Math.random() ? "刷题训练" : "阅读博客" : 6 === t ? e = .5 > Math.random() ? "娱乐时间" : "遗忘" : 7 === t ? e = .5 > Math.random() ? "焦虑" : "提升训练" : 8 === t && (e = "赛前一天")),
    showTrainingEvent(e)
}
function shuffleArray(e) {
    for (let t = e.length - 1; t > 0; t--) {
        let n = Math.floor(Math.random() * (t + 1));
        [e[t],e[n]] = [e[n], e[t]]
    }
    return e
}
function handlePhaseTransition() {
    let e = {
        easy: .85,
        normal: .9,
        hard: 1,
        expert: 1.15
    }[gameDifficulty];
    1 === currentPhase ? (logEvent("CSP-S比赛即将开始...", "event"),
    currentPhase = 2,
    startContest("CSP-S")) : 2 === currentPhase ? (logEvent("第二次训练开始...", "event"),
    currentPhase = 3,
    startTrainingEvents(6)) : 3 === currentPhase ? playerStats.cspScore <= 0 ? (showSkipContestEvent("由于CSP-S成绩为零分", "NOIP", 4),
    playerStats.noipScore = 0) : (logEvent("NOIP比赛即将开始...", "event"),
    currentPhase = 4,
    startContest("NOIP")) : 4 === currentPhase ? (logEvent("第三次训练开始...", "event"),
    currentPhase = 5,
    startTrainingEvents(7)) : 5 === currentPhase ? playerStats.cspScore < 150 * e ? showSkipContestEvent("由于CSP-S成绩未达到二等奖及以上", "WC", 6) : (logEvent("WC比赛即将开始...", "event"),
    currentPhase = 6,
    startContest("WC")) : 6 === currentPhase ? (logEvent("第四次训练开始...", "event"),
    currentPhase = 7,
    startTrainingEvents(8)) : 7 === currentPhase ? (logEvent("省选Day1比赛即将开始...", "event"),
    currentPhase = 8,
    startContest("省选Day1")) : 8 === currentPhase ? (logEvent("第五次训练开始...", "event"),
    currentPhase = 9,
    startTrainingEvents(2)) : 9 === currentPhase ? (logEvent("省选Day2比赛即将开始...", "event"),
    currentPhase = 10,
    startContest("省选Day2")) : 10 === currentPhase ? (logEvent("第六次训练开始...", "event"),
    currentPhase = 11,
    startTrainingEvents(4)) : 11 === currentPhase ? playerStats.noipScore < 130 * e ? showSkipContestEvent("由于NOIP成绩未达到二等奖及以上", "APIO", 12) : (logEvent("APIO比赛即将开始...", "event"),
    currentPhase = 12,
    startContest("APIO")) : 12 === currentPhase ? (logEvent("第七次训练开始...", "event"),
    currentPhase = 12.5,
    startTrainingEvents(4)) : 12.5 === currentPhase ? playerStats.isProvincialTeam ? (logEvent("NOI 笔试即将开始...", "event"),
    currentPhase = 13,
    startContest("NOI Day0")) : showSkipContestEvent("由于未进入省队", "NOI", 16) : 13 === currentPhase ? (logEvent("NOI Day1比赛即将开始...", "event"),
    currentPhase = 14,
    startContest("NOI Day1")) : 14 === currentPhase ? (logEvent("第八次训练开始...", "event"),
    currentPhase = 15,
    startTrainingEvents(2)) : 15 === currentPhase ? (logEvent("NOI Day2比赛即将开始...", "event"),
    currentPhase = 16,
    startContest("NOI Day2")) : 16 === currentPhase ? (logEvent("第九次训练开始...", "event"),
    currentPhase = 17,
    startTrainingEvents(8)) : 17 === currentPhase ? (logEvent("CSP-S比赛即将开始...", "event"),
    currentPhase = 18,
    startContest("CSP-S")) : 18 === currentPhase ? (logEvent("第十次训练开始...", "event"),
    currentPhase = 19,
    startTrainingEvents(6)) : 19 === currentPhase ? playerStats.cspScore <= 0 && !1 == playerStats.isTrainingTeam ? (showSkipContestEvent("由于CSP-S成绩为零分", "NOIP", 20),
    playerStats.noipScore = 0) : (logEvent("NOIP比赛即将开始...", "event"),
    currentPhase = 20,
    startContest("NOIP")) : 20 === currentPhase ? playerStats.isTrainingTeam ? (logEvent("第十一次训练开始...", "event"),
    currentPhase = 21,
    startTrainingEvents(6)) : (logEvent("第十一次训练开始...", "event"),
    currentPhase = 29,
    startTrainingEvents(7)) : 21 === currentPhase ? (logEvent("CTT Day1比赛即将开始...", "event"),
    currentPhase = 22,
    startContest("CTT Day1")) : 22 === currentPhase ? (logEvent("CTT Day2比赛即将开始...", "event"),
    currentPhase = 23,
    startContest("CTT Day2")) : 23 === currentPhase ? (logEvent("CTT Day3比赛即将开始...", "event"),
    currentPhase = 24,
    startContest("CTT Day3")) : 24 === currentPhase ? (logEvent("CTT Day4比赛即将开始...", "event"),
    currentPhase = 25,
    startContest("CTT Day4")) : 25 === currentPhase ? playerStats.isCandidateTeam ? (logEvent("第十二次训练开始...", "event"),
    currentPhase = 26,
    startTrainingEvents(4)) : (logEvent("第十二次训练开始...", "event"),
    currentPhase = 29,
    startTrainingEvents(4)) : 26 === currentPhase ? (logEvent("CTS Day1比赛即将开始...", "event"),
    currentPhase = 27,
    startContest("CTS Day1")) : 27 === currentPhase ? (logEvent("CTS Day2比赛即将开始...", "event"),
    currentPhase = 28,
    startContest("CTS Day2")) : 28 === currentPhase ? (logEvent("第十三次训练开始...", "event"),
    currentPhase = 31,
    startTrainingEvents(7)) : 29 === currentPhase ? playerStats.cspScore < 180 * e ? showSkipContestEvent("由于CSP-S成绩未达到二等奖及以上", "WC", 30) : (logEvent("WC比赛即将开始...", "event"),
    currentPhase = 30,
    startContest("WC")) : 30 === currentPhase ? (logEvent("第十四次训练开始...", "event"),
    currentPhase = 31,
    startTrainingEvents(8)) : 31 === currentPhase ? (logEvent("省选Day1比赛即将开始...", "event"),
    currentPhase = 32,
    playerStats.isProvincialTeam = !1,
    startContest("省选Day1")) : 32 === currentPhase ? (logEvent("第十五次训练开始...", "event"),
    currentPhase = 33,
    startTrainingEvents(2)) : 33 === currentPhase ? (logEvent("省选Day2比赛即将开始...", "event"),
    currentPhase = 34,
    startContest("省选Day2")) : 34 === currentPhase ? playerStats.isProvincialTeam || playerStats.isNationalTeam ? (logEvent("第十六次训练开始...", "event"),
    currentPhase = 35,
    startTrainingEvents(8)) : (logEvent("由于未能进入省队，你的OI生涯就此结束", "event"),
    showGameOver("在高二省选中未能进入省队")) : 35 === currentPhase ? (logEvent("APIO比赛即将开始...", "event"),
    currentPhase = 37,
    startContest("APIO")) : 37 === currentPhase ? (logEvent("第十七次训练开始...", "event"),
    currentPhase = 37.5,
    startTrainingEvents(8)) : 37.5 === currentPhase ? (logEvent("NOI 笔试即将开始...", "event"),
    currentPhase = 38,
    startContest("NOI Day0")) : 38 === currentPhase ? (logEvent("NOI Day1比赛即将开始...", "event"),
    currentPhase = 39,
    playerStats.isTrainingTeam = !1,
    startContest("NOI Day1")) : 39 === currentPhase ? (logEvent("第十八次训练开始...", "event"),
    currentPhase = 40,
    startTrainingEvents(2)) : 40 === currentPhase ? (logEvent("NOI Day2比赛即将开始...", "event"),
    currentPhase = 41,
    startContest("NOI Day2")) : 41 === currentPhase ? playerStats.isNationalTeam ? (logEvent("第十九次训练开始...", "event"),
    currentPhase = 42,
    startTrainingEvents(6)) : playerStats.isTrainingTeam ? (logEvent("第十九次训练开始...", "event"),
    currentPhase = 45,
    startTrainingEvents(8)) : showGameOver("完成NOI比赛") : 42 === currentPhase ? (logEvent("IOI Day1比赛即将开始...", "event"),
    currentPhase = 43,
    startContest("IOI Day1")) : 43 === currentPhase ? (logEvent("IOI Day2比赛即将开始...", "event"),
    currentPhase = 44,
    startContest("IOI Day2")) : 44 === currentPhase ? playerStats.isIOIgold || playerStats.isIOIchampion || !playerStats.isTrainingTeam ? showGameOver("完成IOI比赛") : (currentPhase = 45,
    startTrainingEvents(8)) : 45 === currentPhase ? (logEvent("CTT Day1比赛即将开始...", "event"),
    currentPhase = 46,
    playerStats.isCandidateTeam = !1,
    startContest("CTT Day1")) : 46 === currentPhase ? (logEvent("CTT Day2比赛即将开始...", "event"),
    currentPhase = 47,
    startContest("CTT Day2")) : 47 === currentPhase ? (logEvent("CTT Day3比赛即将开始...", "event"),
    currentPhase = 48,
    startContest("CTT Day3")) : 48 === currentPhase ? (logEvent("CTT Day4比赛即将开始...", "event"),
    currentPhase = 49,
    startContest("CTT Day4")) : 49 === currentPhase ? playerStats.isCandidateTeam ? (logEvent("第二十次训练开始...", "event"),
    currentPhase = 50,
    startTrainingEvents(4)) : showGameOver("未能进入候选队") : 50 === currentPhase ? (logEvent("CTS Day1比赛即将开始...", "event"),
    currentPhase = 51,
    playerStats.isNationalTeam = !1,
    startContest("CTS Day1")) : 51 === currentPhase ? (logEvent("CTS Day2比赛即将开始...", "event"),
    currentPhase = 52,
    startContest("CTS Day2")) : 52 === currentPhase ? playerStats.isNationalTeam ? (logEvent("第二十一次训练开始...", "event"),
    currentPhase = 53,
    startTrainingEvents(6)) : showGameOver("未能进入国家队") : 53 === currentPhase ? (logEvent("IOI Day1比赛即将开始...", "event"),
    currentPhase = 54,
    startContest("IOI Day1")) : 54 === currentPhase ? (logEvent("IOI Day2比赛即将开始...", "event"),
    currentPhase = 55,
    startContest("IOI Day2")) : 55 === currentPhase && showGameOver("完成IOI比赛")
}
function showGameOver(e) {
    let t = document.querySelector(".game-panel")
      , n = "";
    n = playerStats.achievements.length > 0 ? playerStats.achievements.map(e => `<li>${e}</li>`).join("") : "<li>没有获得任何成就</li>";
    let r = "";
    r = playerStats.isIOIchampion ? "你成功拿到了 IOI 冠军 —— 这实在是不可思议！你成为了 IOI 历史上最伟大的选手之一，你是当之无愧的赢家！" : playerStats.isIOIgold ? "你成功拿到了 IOI 金牌 —— 这也许是你曾经想都不敢想的成绩，但你做到了！唯一的遗憾是，你没有获得 IOI 冠军，没有成为 IOI 历史上最伟大的选手之一。" : playerStats.isNationalTeam ? "你成为了中国国家队选手，代表中国参加了 IOI。虽然没有取得最好的成绩，但这仍然是一个令人骄傲的成就！" : playerStats.isTrainingTeam ? "你作为中国国家集训队选手，已经具备了保送资格。希望 OI 能成为你人生中的一道亮丽风景，不过你的人生才刚刚开始！" : playerStats.isProvincialTeam ? "作为省队选手，你在 OI 的道路上已经取得了不错的成绩。虽然没有成功进入集训队，虽然也许还能再好，但你已经做得令自己很满意了。" : "虽然未能进入省队，但在 OI 的道路上你依然收获了宝贵的经验。退役之后你仍然会常常想起，曾经学 OI 的时候的一些瞬间。",
    t.innerHTML = `
              <div style="text-align: center; padding: 40px;">
                  <h2 style="color: #1a237e;">游戏结束</h2>
                  <p style="color: #666; margin: 20px 0;">${e}</p>
                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                      <h3 style="color: #1a237e; margin-bottom: 15px;">你的成就</h3>
                      <ul style="list-style: none; padding: 0;">
                          ${n}
                      </ul>
                  </div>
                  <p style="color: #333; margin: 20px 0; font-style: italic;">${r}</p>
                  <button onclick="window.location.reload()" class="btn blue" style="margin-top: 20px;">重新开始</button>
              </div>
          `
}
let purchasedItems = new Set;
function calculateAward(e, t, n=0, r=0, a=0) {
    let o = {
        easy: .85,
        normal: .9,
        hard: 1,
        expert: 1.15
    }[gameDifficulty]
      , s = "";
    switch (e) {
    case "CSP-S":
        return s = t >= 250 * o ? "一等奖" : t >= 150 * o ? "二等奖" : t >= 60 * o ? "三等奖" : "没有获奖",
        playerStats.achievements.push(`CSP-S：${t}分，${s}`),
        s;
    case "NOIP":
        return s = t >= 230 * o ? "一等奖" : t >= 130 * o ? "二等奖" : t >= 50 * o ? "三等奖" : "没有获奖",
        playerStats.achievements.push(`NOIP：${t}分，${s}`),
        s;
    case "WC":
        return s = t >= 220 * o ? "金牌" : t >= 150 * o ? "银牌" : t >= 100 * o ? "铜牌" : "铁牌",
        playerStats.achievements.push(`${e}：${t}分，${s}`),
        s;
    case "APIO":
        return s = t >= 180 * o ? "金牌" : t >= 140 * o ? "银牌" : t >= 80 * o ? "铜牌" : "铁牌",
        playerStats.achievements.push(`${e}：${t}分，${s}`),
        s;
    case "省选":
        let i = playerStats.tempScore;
        return i >= 725 * o ? (s = "省队A队",
        playerStats.isProvincialTeamA = !0) : s = i >= 550 * o ? "省队B队" : "没有进队",
        playerStats.achievements.push(`省选：${i}分，${s}`),
        s;
    case "NOI":
        let l = playerStats.tempScore;
        return l >= 475 * o ? (s = "金牌",
        playerStats.isTrainingTeam = !0) : s = l >= 350 * o ? "银牌" : l >= 250 * o ? "铜牌" : "铁牌",
        playerStats.achievements.push(`NOI：${l}分，${s}`),
        s;
    case "CTT":
        let c = playerStats.tempScore;
        return s = c >= 750 * o ? "入选候选队" : "没有入选候选队",
        playerStats.achievements.push(`CTT：${c}分，${s}`),
        c >= 750 * o && (playerStats.isCandidateTeam = !0),
        s;
    case "CTS":
        let p = playerStats.tempScore;
        return s = p >= 1100 * o ? "入选国家队" : "没有入选国家队",
        playerStats.achievements.push(`CTS：${p}分，${s}`),
        p >= 1100 * o && (playerStats.isNationalTeam = !0),
        s;
    case "IOI":
        let m = playerStats.tempScore;
        return m >= 500 * o ? (s = "金牌（冠军）",
        playerStats.isIOIchampion = !0) : m >= 425 * o ? (s = "金牌",
        playerStats.isIOIgold = !0) : s = m >= 325 * o ? "银牌" : m >= 250 * o ? "铜牌" : "铁牌",
        playerStats.achievements.push(`IOI：${m}分，${s}`),
        s;
    default:
        return ""
    }
}
function showSkipContestEvent(e, t, n) {
    let r = document.getElementById("training-event-panel")
      , a = document.getElementById("event-options")
      , o = r.querySelector(".event-subtitle");
    o && o.remove();
    let s = r.querySelector("#event-description");
    s && s.remove(),
    r.querySelector("h2").textContent = `无法参加${t}比赛`,
    a.innerHTML = `
              <div style="text-align: center; padding: 20px;">
                  <h3 style="color: #dc3545; margin-bottom: 20px;">${e}，你将无法参加${t}比赛</h3>
                  <p style="margin: 20px 0; color: #666;">这对你的OI生涯造成了一定影响，但现在最重要的是继续前进。</p>
                  <div class="event-option" onclick="handleSkipContestConfirm(${n})">
                      <h3>继续训练</h3>
                      <p>尽管错过了这次机会，但你的OI之路还在继续。</p>
                  </div>
              </div>
          `,
    r.style.display = "block",
    document.getElementById("game-interface").style.display = "none",
    logEvent(`${e}，无法参加${t}比赛`, "event")
}
function handleSkipContestConfirm(e) {
    let t = document.getElementById("training-event-panel");
    if (t.style.display = "none",
    null === e) {
        let n = document.querySelector(".game-panel");
        n.innerHTML = `
                  <div style="text-align: center; padding: 40px;">
                      <h2 style="color: #dc3545;">游戏结束</h2>
                      <p>你的OI生涯就此结束。</p>
                      <button onclick="window.location.reload()" class="btn blue" style="margin-top: 20px;">重新开始</button>
                  </div>
              `
    } else
        currentPhase = e,
        handlePhaseTransition()
}
function mapAttributeValue(e) {
    return e <= 4 ? e : Math.floor(4 + (e - 4) / 2)
}
function getUpdatedShopOptions() {
    return [{
        text: "思维提升",
        effects: {
            thinking: 1
        },
        cost: currentShopPrices["思维提升"],
        description: `花费${currentShopPrices["思维提升"]}点决心提升1点思维能力`
    }, {
        text: "代码提升",
        effects: {
            coding: 1
        },
        cost: currentShopPrices["代码提升"],
        description: `花费${currentShopPrices["代码提升"]}点决心提升1点代码能力`
    }, {
        text: "细心提升",
        effects: {
            carefulness: 1
        },
        cost: currentShopPrices["细心提升"],
        description: `花费${currentShopPrices["细心提升"]}点决心提升1点细心`
    }, {
        text: "随机提升",
        effects: {
            random: ["dp", "ds", "string", "graph", "combinatorics", "geometry", "linearalgebra", "calculus", "numerical", "probability", "complexanalysis", "linearprogramming", "constant", "matroid", "crypto"]
        },
        cost: currentShopPrices["随机提升"],
        description: `花费${currentShopPrices["随机提升"]}点决心随机提升一项算法能力`
    }, {
        text: "心态恢复",
        effects: {
            mood: 4
        },
        cost: currentShopPrices["心态恢复"],
        description: `花费${currentShopPrices["心态恢复"]}点决心提升 4 点心态`
    }, {
        text: "全面提升",
        effects: {
            dp: 1,
            ds: 1,
            string: 1,
            graph: 1,
            combinatorics: 1,
            geometry: 1,
            linearalgebra: 1,
            numbertheory: 1,
            polynomial: 1,
            gametheory: 1,
            construction: 1,
            calculus: 1,
            numerical: 1,
            probability: 1,
            complexanalysis: 1,
            linearprogramming: 1,
            constant: 1,
            matroid: 1,
            crypto: 1
        },
        cost: currentShopPrices["全面提升"],
        description: `花费${currentShopPrices["全面提升"]}点决心提升所有算法能力`
    }, {
        text: "速度提升",
        effects: {
            quickness: 1
        },
        cost: currentShopPrices["速度提升"],
        description: `花费${currentShopPrices["速度提升"]}点决心提升1点迅捷`
    }, {
        text: "心理素质提升",
        effects: {
            mental: 1
        },
        cost: currentShopPrices["心理素质提升"],
        description: `花费${currentShopPrices["心理素质提升"]}点决心提升1点心理素质`
    }, {
        text: "经验提升",
        effects: {
            experience: 1
        },
        cost: currentShopPrices["经验提升"],
        description: `花费${currentShopPrices["经验提升"]}点决心提升1点经验`
    }, {
        text: "放弃购买",
        effects: {},
        description: "离开商店"
    }]
}
let gameDifficulty = "easy";
function showAdvancedMode() {
    document.getElementById("start-screen").style.display = "none",
    document.getElementById("difficulty-screen").style.display = "block"
}
function backToMainMenu() {
    document.getElementById("difficulty-screen").style.display = "none",
    document.getElementById("game-title").textContent = "OI 比赛模拟游戏",
    document.getElementById("start-screen").style.display = "block",
    document.querySelector(".start-buttons").style.display = "flex",
    document.querySelector(".changelog-content").style.display = "none"
}
function startAdvancedMode(e) {
    switch (gameDifficulty = e,
    e) {
    case "easy":
        remainingPoints = 30,
        remainingAbilityPoints = 5,
        playerStats.determination = 0,
        mood = 20,
        extraMoodDrop = 1,
        currentShopPrices = getInitialShopPrices("easy");
        break;
    case "normal":
        remainingPoints = 20,
        remainingAbilityPoints = 3,
        playerStats.determination = 0,
        mood = 18,
        extraMoodDrop = 2,
        currentShopPrices = getInitialShopPrices("normal");
        break;
    case "hard":
        remainingPoints = 20,
        remainingAbilityPoints = 2,
        playerStats.determination = 0,
        mood = 15,
        extraMoodDrop = 3,
        currentShopPrices = getInitialShopPrices("hard");
        break;
    case "expert":
        remainingPoints = 15,
        remainingAbilityPoints = 2,
        playerStats.determination = 0,
        mood = 12,
        extraMoodDrop = 3,
        currentShopPrices = getInitialShopPrices("expert")
    }
    document.getElementById("remaining-points").textContent = remainingPoints,
    document.getElementById("remaining-ability-points").textContent = remainingAbilityPoints,
    document.getElementById("difficulty-screen").style.display = "none",
    document.getElementById("pre-story-panel").style.display = "block",
    document.getElementById("log-panel").style.display = "none",
    document.getElementById("pre-story-title").textContent = "我重生了？",
    document.getElementById("pre-story-content").innerHTML = `
              <p>参加完 2077 年的省队选拔后，高二的你意识到自己无缘今年省队了。也许从此就和 OI 无缘了。</p>
              <p>你躺在床上，闭上眼，回想起自己曾经在 OI 赛场上挥洒汗水的场景。</p>
              <p>眼泪还是流了出来。你不甘心，你觉得你还可以做得更好。</p>
              <p>你突然惊醒，发现自己回到了高一前的暑假。</p>
              <p>之前经历的一切仿佛是一场梦，却又那么真实。</p>
              <p>你意识到，这一次，你还有机会。</p>
              <p>你决定，这一次，让 OI 生涯不留遗憾。</p>
              <p>你充满了决心。</p>
              <div style="margin-top: 30px; text-align: center;">
                  <button onclick="proceedToAllocation()" class="btn" style="font-size: 16px; padding: 8px 20px;">开始训练</button>
              </div>
          `;
    let t = document.querySelector(".story-content");
    t && (t.style.borderLeft = "none",
    t.style.paddingLeft = "0"),
    timePoints = 24,
    currentProblem = 1,
    totalProblems = 0,
    currentContestName = "NOIP普及组",
    playerStats = {
        dp: 0,
        ds: 0,
        string: 0,
        graph: 0,
        combinatorics: 0,
        geometry: 0,
        linearalgebra: 0,
        polynomial: 0,
        numbertheory: 0,
        construction: 0,
        gametheory: 0,
        thinking: 0,
        coding: 0,
        carefulness: 0,
        experience: 0,
        determination: playerStats.determination,
        achievements: []
    },
    gameLog = [],
    document.getElementById("log").innerHTML = "",
    logEvent(`选择了${{
        easy: "简单",
        normal: "普通",
        hard: "困难",
        expert: "专家"
    }[e]}难度`, "event"),
    logEvent(`初始知识点：${remainingPoints}`, "event"),
    logEvent(`初始能力点：${remainingAbilityPoints}`, "event"),
    logEvent(`初始决心：${playerStats.determination}`, "event"),
    logEvent(`初始心态：${mood}`, "event"),
    updateStatus()
}
function getInitialShopPrices(e) {
    return ({
        easy: {
            思维提升: 300,
            代码提升: 300,
            细心提升: 300,
            随机提升: 300,
            心态恢复: 300,
            全面提升: 1200,
            速度提升: 1e3,
            心理素质提升: 1e3,
            经验提升: 1e3
        },
        normal: {
            思维提升: 300,
            代码提升: 300,
            细心提升: 300,
            随机提升: 300,
            心态恢复: 300,
            全面提升: 1500,
            速度提升: 1e3,
            心理素质提升: 1e3,
            经验提升: 1e3
        },
        hard: {
            思维提升: 300,
            代码提升: 300,
            细心提升: 300,
            随机提升: 400,
            心态恢复: 500,
            全面提升: 1500,
            速度提升: 1500,
            心理素质提升: 1500,
            经验提升: 1500
        },
        expert: {
            思维提升: 500,
            代码提升: 500,
            细心提升: 500,
            随机提升: 400,
            心态恢复: 500,
            全面提升: 2e3,
            速度提升: 2500,
            心理素质提升: 2500,
            经验提升: 2500
        }
    })[e]
}
function showChangelog() {
    document.getElementById("start-screen").style.display = "block",
    document.querySelector(".start-buttons").style.display = "none",
    document.getElementById("game-title").textContent = "更新日志",
    document.querySelector(".changelog-content").style.display = "block"
}
function submitAnswerProblem(e) {
    if (timePoints <= 0) {
        alert("时间点不足！");
        return
    }
    timePoints--;
    let t = problems[e]
      , n = subProblems[e][0]
      , r = t.mean || 100
      , a = t.variance || 1;
    switch (gameDifficulty) {
    case "easy":
        r -= 1;
        break;
    case "normal":
        r -= 2;
        break;
    case "hard":
        r -= 3;
        break;
    case "expert":
        r -= 4
    }
    r += .1 * playerStats.carefulness,
    r += .1 * playerStats.thinking,
    r += .05 * playerStats.coding,
    r = Math.min(101, r);
    let o = Math.min(100, Math.max(0, Math.round(r + Math.sqrt(a) * (Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random())))));
    (!isCodeComplete[e][0] || o > n.score) && (n.score = o,
    isCodeComplete[e][0] = !0),
    logEvent(`提交了第 ${e + 1} 题的答案`, "check"),
    logEvent(`消耗了 1 个时间点，剩余 ${timePoints} 个时间点`, "check"),
    logEvent(`本次提交得分: ${o}`, "check"),
    logEvent(`当前最高得分: ${n.score}`, "check"),
    lastActions.push("check"),
    lastActions.length > 5 && lastActions.shift(),
    updateStatus(),
    updateSubProblems(),
    triggerRandomEvent(e, 0)
}
