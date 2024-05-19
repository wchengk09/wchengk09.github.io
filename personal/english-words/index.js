const words = [
    'interaction',
    'frightening',
    'publish',
    'A sense of humor',
    'center on sth',
    'A mix of funny and sad moments',
    'popularity',
    'rights',
    'special guest',
    'adventure',
    'influence',
    '陷入困境',
    'In trouble',
    '是…的简称 词组',
    'Be short for sth',
    '恭喜',
    'Congratulations ',
    '传染',
    'Infect',
    '全心全意投入某事',
    'Put one’s heart (and soul) into sth',
    '感染 患上某种疾病',
    'contract',
    '挑战 ',
    'Challenge ',
    '爆发 动词词组',
    'Break out 动词词组',
    '和某人争吵',
    'Quarrel with sb',
    '爆发 名词',
    'Outbreak 名词',
    '病毒 ',
    'Virus',
    '官员',
    'Official ',
    '控制',
    'Contain',
    '调查',
    'Investigate ',
    '性格',
    'Personality',
    '有想象力的',
    'Imaginative',
    '有冒险精神的',
    'Adventurous ',
    '勇敢的',
    'Brave/courageous',
    '有好奇心的',
    'Curious ',
    '有逻辑的',
    'Logical',
    '有创造力的',
    'Creative/innovative',
    '荒诞的',
    'Absurd',
    '活泼的',
    'Lively/active/energetic',
    '打断打搅 ',
    'Disturb',
    '热情的热心的',
    'enthusiastic',
    '坚持计划',
    'Stick to plans',
    'take a deep breath',
    '深呼吸',
    'motivateeart beat wildly',
    '我的心狂跳不已',
    'shalloworn to do/be sth',
    '天生适合做/就是',
    'surface',
    '表面',
    'calm down',
    '冷静下来',
    'block',
    '阻挡 街区 一大块',
    'provided sb with sth',
    '给某人提供某物',
    'die off',
    '灭绝',
    'successful',
    '成功的',
    'release',
    '释放',
    'be popular with/among',
    '在…之中受欢迎',
    'experiment',
    '实验',
    'come up with a plan',
    '相处一个计划',
    'go for it',
    '尽力争取；不遗余力去做',
    'develop patience',
    '培养耐心',
    'show up',
    '出现',
    'remind sb of sth',
    '提醒某人某事',
    'Run low on sth',
    'Get by',
    'figure',
    'Tend to do sth',
    'Fill up',
    'Inspire',
    'Make it ',
    'Feature',
    'Ahead of ',
    'Vulnerable',
    'Catch up with',
    'Unsteady',
    'Confusion',
    'Get by',
    'Pull over',
    'Be aware of',
    'Be eager to do',
    'Be filled with',
    'Reach',
    'Gratitude/grateful ',
    'valuable family moments',
    'cross talk',
    'have the heart to tell sb',
    '有胆量告诉某人',
    'Lose hear',
    '灰心',
    'courage',
    'put sth to the test',
    'Put sth to practice',
    'be unwilling to do sth',
    'take in the culture',
    'shining moments ',
    'performance',
    'refer to sth as sth',
    'a three-story theatre',
    'hold up the letter “C”',
    'specialize in ',
    'go smoothly',
    'smooth',
    'local folk music',
    'eyes widen',
    'a must-see',
    'appearance',
    'gesture',
    'Fair-weather friends',
    'Entertaining',
    'Reliability',
    'Raise your energy',
    'Depend on ',
    'Transport your mind away from your daily trouble',
    'A sense of humor',
    'To some degree',
    'If I need a hand',
    'Direct the conversation to fun topics',
    'Get along with friends',
    'Appear fun and funny',
    'Discover',
    '发现',
    'Household',
    '家庭的 家喻户晓的',
    'Cover ',
    '覆盖',
    'Metropolis ',
    '大都市',
    'Date back to',
    '追溯到',
    'Emerge',
    '出现 = appear, show up',
    'Be named after',
    '以…为命名',
    'Retain',
    '保留',
    'Convenience(会拼写)',
    '方便 adj. convenient',
    'Inherit',
    '继承',
    'Performance',
    '表演',
    'Splendid',
    '壮观的 华丽的',
    'Form',
    '形式 表格 形成',
    'Exhibit',
    '展示 = show',
    'Function ',
    '功能',
    'Dramatic',
    '戏剧的',
    'Outstanding',
    '杰出的 优秀的',
    'Visible',
    '可见的 反义词 invisible',
    'As well as',
    '以及 和',
    'Abstract ',
    '抽象的',
    'Snack',
    '零食',
    'Blend',
    '混合',
    'Reputation',
    '名声名誉',
    'Depict',
    '描述 = describe',
    'Involve',
    '包含包括',
    'Accompany',
    '陪伴 ',
    'Represent   ',
    '代表',
    'Originate',
    '起源',
    'Charm ',
    '魅力 adj. charming',
    'Foremost ',
    '最重要的',
    'an extra charge ',
    '额外收费',
    'in short',
    '简而言之 总之',
    'feel like a chat',
    '想要聊天',
    'catch up with',
    '追赶上',
    'lonely',
    '孤独的',
    'facial recognition',
    '面部识别',
    'entrance',
    '入口',
    'passer-by',
    '路人',
    'traffic signs',
    '交通标识',
    'signal system ',
    '信号系统',
    'service',
    '服务',
    'speed up',
    '加速',
    'ride（两个词性 一词多义）',
    '乘车',
    '行程',
    'powerful',
    '强大的',
    'give sb a ride',
    '载某人一程',
    'inform sb of sth',
    '通知某人某事',
    'fare',
    '车费',
    'replace',
    '代替',
    'in honor of',
    '为了庆祝...',
    '为了表示对...对尊重',
    'take the place',
    '代替',
    'low-income',
    '低收入的',
    'invent',
    '发明',
    '阅读与表达',
    '单选',
    'hear sb out',
    '听取某人意见',
    'as a result',
    '因此',
    'hold up',
    '使停止',
    'even if',
    '即使',
    'rush-hour traffic',
    '高峰交通',
    'impatient',
    '不耐心的，不耐烦的',
    'injury ',
    '受伤',
    'reply',
    '回应 回复',
    'drop',
    '掉落 下降 减少',
    'stop beating',
    '停止击打/心脏停止跳动',
    'leak',
    '泄漏',
    'lower his head',
    '低下头',
    'break a fall ',
    '减缓冲击',
    'slip',
    '滑倒',
    'escape',
    '逃离',
    'steal',
    '偷窃',
    'a slight chance',
    '一丝机会',
    'infer',
    '推断',
    'numerous',
    'available',
    'combination',
    'entertainment',
    'destination',
    'service',
    'option',
    'budget',
    'factor',
    'link',
    'a lack of',
    'a range of',
    'a variety of',
    'avoid',
    'prevent sb from doing sth',
    'ensure',
    'afford',
    'in addition to sth',
    'due to',
    'since',
    'thus',
    'play a role in sth',
    'impact',
    'affect',
    'effect',
    'influence',
    'critical',
    'depend on',
    'be dependent on',
    'economy',
    'boom',
    'remote',
    'solely',
    'premium',
    'congestion',
    'seek',
    'component',
    'security',
    'vehicle ',
    'accommodation',
    'regardless',
    'subtle',
    'direct',
    'up-to-date',
    'constant',
    'regulate',
    'against(一词多义)',
    'tough (一词多义)',
    'stereotype',
    'notice',
    'recognize (一词多义)',
    'fix(一词多义)',
    'challenging',
    'elicit',
    'mentor',
    'experienced',
    'concentration',
    'disappear',
    'negative',
    'positive',
    'optimistic',
    'significant',
    'reduction',
    'violent',
    'fascinated',
    'found',
    'reinforce ',
    'outlook',
    'associate',
    'cope with',
    'talented ',
    'trauma ',
    'severe',
    'distress/ distressing',
    'disadvantaged',
    'resilience',
    'determination',
    'poverty',
    '换位思考',
    '换位思考',
    'reach a compromise',
    '心碎的',
    '失落的',
    '腾出时间做某事',
    'register',
    '记忆 ',
    '流利的',
    '一... 就...',
    'as long as ',
    'properly',
    '达成目标',
    '有难忘的风景',
    'process information',
    '做某事有困难',
    '成功需要努力',
    'be available ',
    '安慰 ',
    '鼓励 ',
    'take turn to do sth',
    'convince ',
    'avoid',
    '灵感 ',
    '鼓舞人心的 adj.',
    'put sth into practice/action',
    'take action',
    'takeaway',
    '对他人尊重 adj.',
    'appreciate ',
    '将A和B联系起来 词组',
    'universal',
    'valuable',
    'authentic',
    'concentrate on sth',
    'vulnerable ',
    '地标',
    'cityscape',
    'tourist attraction',
    '从A发展到B',
    'reform and re-opening',
    'compare ()',
    '做比较 词组',
    'peak ',
    'peak hours',
    'positive',
    '坐落于',
    'coastline',
    '快速地',
    'architecture',
    '首先（3个词）',
    'diversity',
    '其次（3个词）',
    'diverse',
    '因...而著名（至少3个）',
    'evident',
    '户外运动',
    'dedication',
    '是...的所在地',
    'melting pot',
    'play',
    '有重要的作用 词组 ',
    'constant',
    '吸引',
    'evolving',
    '本地人',
    'towering',
    '游客 两种写法',
    'extensive',
    '爱好者',
    'skyline',
    'social media',
    'skyscraper',
    'be surrounded by',
    'vibrant',
    'destination',
    'prosperous',
    'impressive',
    'thriving',
    'tradition',
    'boundary',
    'reflect ',
    'dominate ',
    'a range of',
    'district',
    'numerous',
    'contrast',
    'breathtaking views',
    'innovation',
    'recreational activities',
    'cuisine',
    'Pose a threat to',
    '造成威胁',
    'Emergency',
    '突发事件',
    'Security',
    '安全',
    'Violence ',
    '暴力',
    'Assess',
    '评估',
    'Spill ',
    '倾洒 溢出',
    'Make up',
    '构成 编造 化妆',
    'Collapse ',
    '倾倒 崩溃',
    'Handle',
    '处理=deal with',
    'Hazardous ',
    '危险的',
    'Effective',
    '有效的',
    'Rescue ',
    '救援救助',
    'Assistance assist',
    '帮助 前名后动',
    'Infect ',
    '传染 使感染',
    'Seek ',
    '寻找=look for',
    'Disinfectant ',
    '消毒剂',
    'Determine ',
    '确定 决定',
    'Victim',
    '受害者',
    'Indicate ',
    '表明 显示',
    'Conscious',
    '有意识的',
    'Result in ',
    '导致',
    '*Discern',
    '辨别 识别',
    'React to',
    '反应',
    '*Constructive ',
    '有建设性的 积极的',
    'Potential ',
    '潜在的 潜力',
    '*Reassure',
    '使安心 打消疑虑',
    'Natural disasters',
    '自然灾害',
    '*Retrieve  ',
    '找回挽回',
    'Predictable ',
    '可预测的',
    '*Property ',
    '财产',
    'Panicked ',
    '慌张的',
    '*Deliberately ',
    '故意地',
    'Distracting',
    '令人分心的',
    'adjust',
    '调节 调整'
];

function rand(){
    var word = words[Math.floor(Math.random() * words.length)];
    var number = Math.floor(Math.random() * 50) + 1;
    while (number === 24 || number === 30 || number === 49)
        number = Math.floor(Math.random() * 50) + 1;
    getObj('word').innerHTML = word;
    getObj('number').innerHTML = number;
}