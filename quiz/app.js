const stages = [
  {
    title: "大模型基础",
    meta: "阶段 1",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "LLM 本质",
        prompt: "下面哪种说法最准确地描述大语言模型？",
        options: [
          "一个通过海量文本训练、根据上下文预测后续内容的概率生成模型",
          "一个保存了所有问题答案的数据库",
          "一个只能做搜索排序的关键词匹配系统",
          "一个不需要 tokenization 就能直接理解文字的程序"
        ],
        answer: 0,
        explain: "大模型的核心是从上下文中预测后续 token，而不是查固定答案。"
      },
      {
        type: "single",
        topic: "训练与推理",
        prompt: "关于训练和推理，下列哪项正确？",
        options: [
          "训练通常会更新模型参数，推理通常使用已有参数生成结果",
          "推理一定会把用户问题永久写入模型参数",
          "训练成本通常低于一次普通 API 调用",
          "训练和推理没有本质区别"
        ],
        answer: 0,
        explain: "训练是学习并更新参数，推理是使用训练好的参数进行生成。"
      },
      {
        type: "single",
        topic: "Token",
        prompt: "Token 的理解，哪一项最合理？",
        options: [
          "Token 是模型处理文本的基本单位，可能是字、词、词片段或符号",
          "Token 永远等于一个汉字",
          "Token 永远等于一个英文单词",
          "Token 只在计费时有用，和模型计算无关"
        ],
        answer: 0,
        explain: "模型实际处理 token ID，token 的切分取决于 tokenizer。"
      },
      {
        type: "single",
        topic: "生成机制",
        prompt: "为什么说模型不是在“查答案”？",
        options: [
          "因为模型会根据当前上下文逐步预测下一个 token，动态生成文本",
          "因为模型不能回答事实问题",
          "因为模型只能随机输出",
          "因为模型完全没有训练数据"
        ],
        answer: 0,
        explain: "模型可以生成事实性答案，但生成方式仍然是逐 token 预测。"
      },
      {
        type: "text",
        topic: "口述表达",
        prompt: "用 1 分钟解释：大模型从用户输入到生成回答的大致流程。",
        rubric: "要点：文本进入 tokenizer；切分成 token；token 转成 ID；模型根据上下文预测下一个 token；循环生成；最后解码成文本。"
      }
    ]
  },
  {
    title: "Prompt Engineering",
    meta: "阶段 2",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "提示词结构",
        prompt: "一个可复用的业务提示词通常不应该缺少哪类信息？",
        options: [
          "角色、任务、约束、输出格式和必要示例",
          "尽可能多的形容词",
          "和任务无关的背景故事",
          "让模型自由发挥的空泛要求"
        ],
        answer: 0,
        explain: "结构化提示词能降低歧义，并让输出更稳定。"
      },
      {
        type: "single",
        topic: "Few-shot",
        prompt: "Few-shot 示例的主要作用是什么？",
        options: [
          "用少量样例告诉模型输入输出模式和判断边界",
          "让模型跳过所有推理",
          "保证模型不需要上下文",
          "替代线上评测"
        ],
        answer: 0,
        explain: "Few-shot 通过示例约束格式、风格和判断标准。"
      },
      {
        type: "single",
        topic: "评测意识",
        prompt: "迭代 prompt 时，下面哪种做法最靠谱？",
        options: [
          "准备一组固定测试样例，对比不同版本的成功和失败案例",
          "只测一个自己喜欢的问题",
          "每次只凭直觉修改，不记录版本",
          "输出越长就一定越好"
        ],
        answer: 0,
        explain: "Prompt 需要用测试集评估，而不是凭单次体验判断。"
      },
      {
        type: "text",
        topic: "模板设计",
        prompt: "设计一个“从邮件中提取姓名、公司、需求、截止时间”的提示词框架。",
        rubric: "要点：明确角色和任务；定义字段；要求 JSON 输出；说明缺失字段如何处理；给 1 个输入输出示例。"
      }
    ]
  },
  {
    title: "RAG 技术",
    meta: "阶段 3",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "RAG 流程",
        prompt: "RAG 的基本流程是哪一项？",
        options: [
          "文档加载/切分 -> 向量化 -> 检索 -> 拼接上下文 -> 生成",
          "只把所有文档直接塞进系统提示词",
          "先生成答案，再随机找引用",
          "只做关键词搜索，不需要生成"
        ],
        answer: 0,
        explain: "RAG 通过检索外部知识来增强模型生成。"
      },
      {
        type: "single",
        topic: "Chunk",
        prompt: "Chunk 过大最可能带来什么问题？",
        options: [
          "检索结果噪声变多，关键信息不够聚焦",
          "一定会提高召回率且没有副作用",
          "向量库无法存储任何内容",
          "模型不再需要上下文窗口"
        ],
        answer: 0,
        explain: "分块需要在语义完整和检索精度之间平衡。"
      },
      {
        type: "single",
        topic: "Rerank",
        prompt: "Rerank 的主要价值是什么？",
        options: [
          "对初步召回结果重新排序，提高最终上下文相关性",
          "替代文档解析",
          "减少所有 token 成本到 0",
          "让模型永久记住文档"
        ],
        answer: 0,
        explain: "重排通常更准但更慢，适合提升高价值查询的相关性。"
      },
      {
        type: "text",
        topic: "方案设计",
        prompt: "如果用户问知识库问题但模型回答错了，你会从 RAG 哪些环节排查？",
        rubric: "要点：文档解析质量；chunk 策略；embedding 模型；检索 topK/过滤；rerank；prompt 是否要求依据；答案是否做引用和校验。"
      }
    ]
  },
  {
    title: "Agent 核心",
    meta: "阶段 4",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "Agent 循环",
        prompt: "ReAct 的核心思想是什么？",
        options: [
          "让模型在推理和行动之间交替，通过工具观察结果再继续决策",
          "只生成最终答案，不调用工具",
          "只做文档检索",
          "把所有任务都交给人工处理"
        ],
        answer: 0,
        explain: "ReAct 典型流程是 Thought、Action、Observation 的循环。"
      },
      {
        type: "single",
        topic: "Tool Use",
        prompt: "工具调用中 JSON schema 的作用是什么？",
        options: [
          "约束工具名称、参数类型和必填字段，便于模型正确调用",
          "提高图片清晰度",
          "替代所有异常处理",
          "让工具无需鉴权"
        ],
        answer: 0,
        explain: "清晰的 schema 能减少参数错误和工具误用。"
      },
      {
        type: "single",
        topic: "记忆",
        prompt: "短期记忆和长期记忆的区别，哪项更准确？",
        options: [
          "短期记忆通常在当前上下文中，长期记忆通常依赖摘要、数据库或向量库",
          "短期记忆一定永久保存",
          "长期记忆只能放在 prompt 里",
          "两者完全没有区别"
        ],
        answer: 0,
        explain: "短期记忆受上下文窗口限制，长期记忆需要外部存储和检索机制。"
      },
      {
        type: "text",
        topic: "架构表达",
        prompt: "描述一个带计算器和搜索工具的 ReAct Agent 如何处理多步问题。",
        rubric: "要点：理解用户目标；选择工具；传入结构化参数；读取 observation；继续推理；处理失败重试；最终汇总回答。"
      }
    ]
  },
  {
    title: "多智能体与工程化",
    meta: "阶段 5",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "多 Agent",
        prompt: "多 Agent 协作最需要警惕的问题是什么？",
        options: [
          "沟通成本、角色边界、循环失控和结果一致性",
          "代码文件数量太少",
          "所有任务都会自动变快",
          "不再需要评测"
        ],
        answer: 0,
        explain: "多 Agent 增加了协作能力，也增加了流程和成本控制难度。"
      },
      {
        type: "single",
        topic: "模型路由",
        prompt: "模型路由的目标通常是什么？",
        options: [
          "按任务难度、成本、延迟和稳定性选择合适模型",
          "所有请求永远使用最贵模型",
          "随机选择模型以增加多样性",
          "完全绕过权限控制"
        ],
        answer: 0,
        explain: "模型路由是工程化降本、提速和稳态运行的重要手段。"
      },
      {
        type: "single",
        topic: "可观测性",
        prompt: "Agent 系统中 trace id 最主要的价值是什么？",
        options: [
          "串联一次请求中的模型、工具、检索和错误日志，便于排查",
          "让回答更有文采",
          "替代 API Key",
          "自动提升模型参数量"
        ],
        answer: 0,
        explain: "复杂链路需要可追踪，否则线上问题很难定位。"
      },
      {
        type: "text",
        topic: "故障设计",
        prompt: "列出 3 种 Agent 线上失败场景，并说明你的处理策略。",
        rubric: "要点：工具超时/失败重试；模型限流降级；检索为空兜底；参数错误校验；循环次数限制；用户可理解错误提示。"
      }
    ]
  },
  {
    title: "项目实战与面试",
    meta: "阶段 6",
    pass: 70,
    questions: [
      {
        type: "single",
        topic: "项目叙事",
        prompt: "简历里的 AI Agent 项目最应该突出什么？",
        options: [
          "真实问题、你的职责、技术方案、可验证结果和指标",
          "堆最多框架名",
          "只写模型名字",
          "只写“熟悉 AI”"
        ],
        answer: 0,
        explain: "面试官关心你解决了什么问题、怎么做、效果如何。"
      },
      {
        type: "single",
        topic: "STAR",
        prompt: "STAR 面试法中的 R 指什么？",
        options: [
          "Result，结果",
          "Reason，原因",
          "Route，路线",
          "Review，复习"
        ],
        answer: 0,
        explain: "STAR 是 Situation、Task、Action、Result。"
      },
      {
        type: "single",
        topic: "Demo",
        prompt: "一个 3 分钟项目 Demo 最不应该缺少什么？",
        options: [
          "完整主流程、关键技术点、可见结果和异常兜底说明",
          "从安装操作系统开始",
          "只展示 PPT 不展示功能",
          "完全不说明业务场景"
        ],
        answer: 0,
        explain: "短 Demo 要让面试官快速看到价值和你的工程判断。"
      },
      {
        type: "text",
        topic: "深挖准备",
        prompt: "用 STAR 结构写一段你的 AI Agent 主项目经历。",
        rubric: "要点：S 背景具体；T 任务明确；A 包含架构、RAG/Agent/工具/工程化动作；R 有指标或可验证结果。"
      }
    ]
  }
];

const stateKey = "ai-agent-stage-quiz";
const state = JSON.parse(localStorage.getItem(stateKey) || "{}");
let activeStage = Number(state.activeStage || 0);

const stageList = document.querySelector("#stageList");
const stageMeta = document.querySelector("#stageMeta");
const stageTitle = document.querySelector("#stageTitle");
const quizForm = document.querySelector("#quizForm");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const stageScore = document.querySelector("#stageScore");
const resultPanel = document.querySelector("#resultPanel");
const resultSummary = document.querySelector("#resultSummary");
const weakPoints = document.querySelector("#weakPoints");

function saveState() {
  state.activeStage = activeStage;
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function stageStore(index) {
  state[index] ||= { answers: {}, score: null };
  return state[index];
}

function renderStageTabs() {
  stageList.innerHTML = stages.map((stage, index) => {
    const saved = stageStore(index);
    const scoreText = saved.score === null ? "未测评" : `${saved.score} 分`;
    return `
      <button class="stage-tab ${index === activeStage ? "active" : ""}" type="button" data-stage="${index}">
        <strong>${stage.meta}：${stage.title}</strong>
        <span>${scoreText}</span>
      </button>
    `;
  }).join("");
}

function renderQuiz() {
  const stage = stages[activeStage];
  const saved = stageStore(activeStage);

  stageMeta.textContent = stage.meta;
  stageTitle.textContent = stage.title;
  stageScore.textContent = saved.score === null ? "未提交" : `${saved.score} 分`;
  resultPanel.hidden = saved.score === null;

  quizForm.innerHTML = stage.questions.map((question, index) => {
    const value = saved.answers[index] ?? "";
    if (question.type === "text") {
      return `
        <article class="question" data-question="${index}">
          <div class="question-title"><span>${index + 1}.</span><div>${question.prompt}</div></div>
          <textarea class="text-answer" name="q-${index}" placeholder="写下你的口述答案或答题要点">${escapeHtml(value)}</textarea>
          <p class="explain">${question.rubric}</p>
        </article>
      `;
    }

    const options = question.options.map((option, optionIndex) => `
      <label class="option">
        <input type="radio" name="q-${index}" value="${optionIndex}" ${String(value) === String(optionIndex) ? "checked" : ""}>
        <span>${option}</span>
      </label>
    `).join("");

    return `
      <article class="question" data-question="${index}">
        <div class="question-title"><span>${index + 1}.</span><div>${question.prompt}</div></div>
        <div class="options">${options}</div>
      </article>
    `;
  }).join("");

  updateProgress();
  if (saved.score !== null) {
    showResult(false);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function collectAnswers() {
  const saved = stageStore(activeStage);
  stages[activeStage].questions.forEach((question, index) => {
    if (question.type === "text") {
      saved.answers[index] = quizForm.elements[`q-${index}`].value.trim();
      return;
    }
    const checked = quizForm.querySelector(`input[name="q-${index}"]:checked`);
    saved.answers[index] = checked ? checked.value : "";
  });
  saveState();
}

function updateProgress() {
  collectAnswers();
  const saved = stageStore(activeStage);
  const total = stages[activeStage].questions.length;
  const answered = Object.values(saved.answers).filter((value) => String(value).trim() !== "").length;
  progressBar.style.width = `${Math.round((answered / total) * 100)}%`;
  progressText.textContent = `${answered}/${total}`;
}

function showResult(shouldScore = true) {
  collectAnswers();
  const stage = stages[activeStage];
  const saved = stageStore(activeStage);
  let autoTotal = 0;
  let autoCorrect = 0;
  const misses = [];

  stage.questions.forEach((question, index) => {
    const card = quizForm.querySelector(`[data-question="${index}"]`);
    card.classList.remove("correct", "wrong", "manual");

    if (question.type === "text") {
      card.classList.add("manual");
      if (!card.querySelector(".manual-note")) {
        card.insertAdjacentHTML("beforeend", `<p class="explain manual-note">${question.rubric}</p>`);
      }
      return;
    }

    autoTotal += 1;
    const isCorrect = Number(saved.answers[index]) === question.answer;
    if (isCorrect) {
      autoCorrect += 1;
      card.classList.add("correct");
    } else {
      misses.push(question.topic);
      card.classList.add("wrong");
    }

    if (!card.querySelector(".answer-note")) {
      card.insertAdjacentHTML("beforeend", `<p class="explain answer-note">${question.explain}</p>`);
    }
  });

  const score = autoTotal === 0 ? 0 : Math.round((autoCorrect / autoTotal) * 100);
  if (shouldScore) {
    saved.score = score;
    saveState();
  }

  stageScore.textContent = `${score} 分`;
  const status = score >= stage.pass ? "选择题已达标" : "选择题还需要复习";
  resultSummary.textContent = `${status}：自动评分 ${score} 分。主观题请对照要点自评，答不顺就把答案发给我，我来追问。`;
  weakPoints.innerHTML = misses.length
    ? [...new Set(misses)].map((point) => `<div class="weak-point">建议复习：${point}</div>`).join("")
    : `<div class="weak-point">选择题没有明显薄弱点，继续检查主观题表达。</div>`;
  resultPanel.hidden = false;
  renderStageTabs();
}

stageList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage]");
  if (!button) return;
  activeStage = Number(button.dataset.stage);
  saveState();
  renderStageTabs();
  renderQuiz();
});

quizForm.addEventListener("input", updateProgress);
quizForm.addEventListener("change", updateProgress);

document.querySelector("#submitQuiz").addEventListener("click", () => showResult(true));

document.querySelector("#nextStage").addEventListener("click", () => {
  activeStage = Math.min(activeStage + 1, stages.length - 1);
  saveState();
  renderStageTabs();
  renderQuiz();
});

document.querySelector("#resetStage").addEventListener("click", () => {
  state[activeStage] = { answers: {}, score: null };
  saveState();
  renderStageTabs();
  renderQuiz();
});

renderStageTabs();
renderQuiz();
