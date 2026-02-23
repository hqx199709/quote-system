/**
 * 产品清单配置文件
 * =============================================
 * 数据来源：【T8】xxxxx医院-流水线名称及价格-(1).xlsx
 * 修改此文件即可更新所有产品信息和定价规则。
 * 无需修改 app.js 或 index.html。
 * =============================================
 */

// ========== 全局价格常量 ==========
// 基础附加费（实施费等）
window.BASE_EXTRA_FEE = 50000;
// 包含低温存储单元时的附加费
window.LOW_TEMP_EXTRA_FEE = 70000;

// ========== 产品分类清单 ==========
window.productCategories = [
    // ─────────────────────────────────────────
    // 第一组：T8 样品处理核心模块
    // ─────────────────────────────────────────
    {
        name: "T8 样品处理核心模块",
        items: [
            {
                id: "t8-001",
                name: "进出样模块",
                model: "SATLARS T8",
                price: 120000,
                unit: "套",
                description: "全自动进出样模块"
            },
            {
                id: "t8-002",
                name: "倾倒式进样模块",
                model: "SATLARS T8",
                price: 120000,
                unit: "套",
                description: "倾倒式进样模块"
            },
            {
                id: "t8-003",
                name: "离心模块",
                model: "SATLARS T8",
                price: 120000,
                unit: "套",
                description: "离心处理单元"
            },
            {
                id: "t8-004",
                name: "离心机",
                model: "SALTARS",
                price: 100000,
                unit: "台",
                description: "独立离心机单元"
            },
            {
                id: "t8-005",
                name: "开盖模块",
                model: "SATLARS T8",
                price: 70000,
                unit: "套",
                description: "自动开盖/闭盖系统"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第二组：封膜/去膜/整理/低温存储（特殊捆绑逻辑）
    // 四件全选 = 10万，单独封膜 = 6万，单独去膜 = 4万
    // ─────────────────────────────────────────
    {
        name: "T8 附加功能模块（可捆绑）",
        items: [
            {
                id: "t8-006",
                name: "封膜模块",
                model: "SATLARS T8",
                price: 100000,
                unit: "套",
                description: "自动封膜单元（单独6万，四件捆绑10万）"
            },
            {
                id: "t8-007",
                name: "去膜模块",
                model: "SATLARS T8",
                price: 0,
                unit: "套",
                description: "自动去膜单元（单独4万，四件捆绑10万）"
            },
            {
                id: "t8-008",
                name: "整理单元",
                model: "SATLARS T8",
                price: 0,
                unit: "套",
                description: "样品整理归类单元（仅限捆绑报价）"
            },
            {
                id: "t8-009",
                name: "低温存储单元",
                model: "SATLARS T8",
                price: 0,
                unit: "套",
                isLowTemp: true,
                description: "冷藏存储单元（选择后固定费调整为7万）"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第三组：旁路与接口模块
    // ─────────────────────────────────────────
    {
        name: "T8 旁路与接口模块",
        items: [
            {
                id: "t8-010",
                name: "旁路模块1",
                model: "SATLARS T8",
                price: 20000,
                unit: "个",
                description: "旁路模块"
            },
            {
                id: "t8-011",
                name: "旁路模块2",
                model: "SATLARS T8",
                price: 20000,
                unit: "个",
                description: "旁路模块"
            },
            {
                id: "t8-012",
                name: "旁路模块3",
                model: "SATLARS T8",
                price: 20000,
                unit: "个",
                description: "旁路模块"
            },
            {
                id: "t8-013",
                name: "接口模块1",
                model: "SATLARS T8",
                price: 100000,
                unit: "个",
                description: "仪器接口模块"
            },
            {
                id: "t8-014",
                name: "接口模块2",
                model: "SATLARS T8",
                price: 100000,
                unit: "个",
                description: "仪器接口模块"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第四组：轨道模块
    // ─────────────────────────────────────────
    {
        name: "T8 轨道模块",
        items: [
            {
                id: "t8-015",
                name: "L型轨道",
                model: "SATLARS T8",
                price: 20000,
                unit: "条",
                description: "L型弯道轨道"
            },
            {
                id: "t8-016",
                name: "T型轨道",
                model: "SATLARS T8",
                price: 30000,
                unit: "条",
                description: "T型分叉轨道"
            },
            {
                id: "t8-017",
                name: "外U型轨道",
                model: "SATLARS T8",
                price: 20000,
                unit: "条",
                description: "外U型回转轨道"
            },
            {
                id: "t8-018",
                name: "直线轨道-600",
                model: "SATLARS T8",
                price: 15000,
                unit: "条",
                description: "600mm直线轨道"
            },
            {
                id: "t8-019",
                name: "直线轨道-900",
                model: "SATLARS T8",
                price: 18000,
                unit: "条",
                description: "900mm直线轨道"
            },
            {
                id: "t8-020",
                name: "直线轨道-1200",
                model: "SATLARS T8",
                price: 20000,
                unit: "条",
                description: "1200mm直线轨道"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第五组：配套系统
    // ─────────────────────────────────────────
    {
        name: "T8 配套系统",
        items: [
            {
                id: "t8-021",
                name: "中间体、控制系统、样本架、运载器等",
                model: "SATLARS T8",
                price: 40000,
                unit: "套",
                description: "流水线核心控制与传输配件"
            },
            {
                id: "t8-022",
                name: "智慧化显示系统",
                model: "一体机、平板、无线网卡、路由器",
                price: 9900,
                unit: "套",
                description: "智慧化显示与网络系统"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第六组：生化分析仪
    // ─────────────────────────────────────────
    {
        name: "Biossays 生化分析仪",
        items: [
            {
                id: "bio-001",
                name: "全自动生化分析仪 (C8)",
                model: "Biossays C8",
                price: 400000,
                unit: "台",
                brand: "Biossays",
                description: "Biossays C8 全自动生化分析仪"
            },
            {
                id: "bio-002",
                name: "全自动生化分析仪 (C10)",
                model: "Biossays C10",
                price: 500000,
                unit: "台",
                brand: "Biossays",
                description: "Biossays C10 全自动生化分析仪"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 国产日立 008α 生化分析仪（S/SS/SSS）
    // ─────────────────────────────────────────
    {
        name: "国产 日立生化分析仪",
        items: [
            {
                id: "hitachi-cn-s",
                name: "国产 日立 LST008 α S",
                model: "LST008 α S",
                price: 1250000,
                unit: "台",
                brand: "日立",
                description: "国产日立 LABOSPECT 008α 单模块"
            },
            {
                id: "hitachi-cn-ss",
                name: "国产 日立 LST008 α SS",
                model: "LST008 α SS",
                price: 1950000,
                unit: "台",
                brand: "日立",
                description: "国产日立 LABOSPECT 008α 双模块"
            },
            {
                id: "hitachi-cn-sss",
                name: "国产 日立 LST008 α SSS",
                model: "LST008 α SSS",
                price: 2650000,
                unit: "台",
                brand: "日立",
                description: "国产日立 LABOSPECT 008α 三模块"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 进口日立 008α 生化分析仪（S/SS/SSS/SSSS）
    // ─────────────────────────────────────────
    {
        name: "进口 日立生化分析仪",
        items: [
            {
                id: "hitachi-im-s",
                name: "进口 日立 LST008 α S",
                model: "LST008 α S",
                price: 1350000,
                unit: "台",
                brand: "日立",
                description: "进口日立 LABOSPECT 008α 单模块"
            },
            {
                id: "hitachi-im-ss",
                name: "进口 日立 LST008 α SS",
                model: "LST008 α SS",
                price: 2074000,
                unit: "台",
                brand: "日立",
                description: "进口日立 LABOSPECT 008α 双模块"
            },
            {
                id: "hitachi-im-sss",
                name: "进口 日立 LST008 α SSS",
                model: "LST008 α SSS",
                price: 2818000,
                unit: "台",
                brand: "日立",
                description: "进口日立 LABOSPECT 008α 三模块"
            },
            {
                id: "hitachi-im-ssss",
                name: "进口 日立 LST008 α SSSS",
                model: "LST008 α SSSS",
                price: 3562000,
                unit: "台",
                brand: "日立",
                description: "进口日立 LABOSPECT 008α 四模块"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第七组：日立配件与服务
    // ─────────────────────────────────────────
    {
        name: "日立配件与服务",
        items: [
            {
                id: "hitachi-003",
                name: "日立LST008α B链接口",
                model: "B-Gate",
                price: 50000,
                unit: "台",
                brand: "日立",
                description: "日立 008α B链接口模块"
            },
            {
                id: "hitachi-004",
                name: "日立安装检测包",
                model: "生化安装包",
                price: 20000,
                unit: "套",
                brand: "日立",
                description: "日立生化装机调机耗材包"
            },
            {
                id: "hitachi-005",
                name: "日立电极",
                model: "电极",
                price: 10000,
                unit: "套",
                brand: "日立",
                description: "电解质电极 K、Na、CL、参比电极"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第八组：化学发光/凝血/电解质分析仪
    // ─────────────────────────────────────────
    {
        name: "免疫/凝血/电解质分析仪",
        items: [
            {
                id: "snibe-001",
                name: "全自动化学发光免疫分析仪 (X8)",
                model: "MAGLUMI X8",
                price: 300000,
                unit: "台",
                brand: "MAGLUMI",
                description: "MAGLUMI X8 化学发光免疫分析仪"
            },
            {
                id: "snibe-002",
                name: "全自动化学发光免疫分析仪 (X10)",
                model: "MAGLUMI X10",
                price: 500000,
                unit: "台",
                brand: "MAGLUMI",
                description: "MAGLUMI X10 化学发光免疫分析仪"
            },
            {
                id: "hemo-001",
                name: "全自动凝血分析仪",
                model: "Hemolumi H6",
                price: 200000,
                unit: "台",
                brand: "Hemolumi",
                description: "Hemolumi H6 全自动凝血分析仪"
            },
            {
                id: "elec-001",
                name: "电解质分析仪",
                model: "E6Plus",
                price: 100000,
                unit: "台",
                brand: "Biossays",
                description: "E6Plus 电解质分析仪"
            }
        ]
    },

    // ─────────────────────────────────────────
    // 第九组：轨道改装包
    // ─────────────────────────────────────────
    {
        name: "轨道改装包",
        items: [
            {
                id: "upgrade-001",
                name: "单轨改三轨 (C8)",
                model: "轨道改装包",
                price: 25000,
                unit: "套",
                description: "C8 单轨改三轨改装包"
            },
            {
                id: "upgrade-002",
                name: "单轨改三轨 (X8)",
                model: "轨道改装包",
                price: 20000,
                unit: "套",
                description: "X8 单轨改三轨改装包"
            },
            {
                id: "upgrade-003",
                name: "三轨改单轨",
                model: "轨道改装包",
                price: 18000,
                unit: "套",
                description: "三轨改单轨改装包"
            }
        ]
    }
];

// ========== 日立售后服务价格表（免费保修3年后有偿服务） ==========
window.afterSalesService = [
    {
        model: "LST008 α S",
        year4: 64000,
        year5: 64000,
        year6: 72000,
        year7: 72000
    },
    {
        model: "LST008 α SS",
        year4: 96000,
        year5: 96000,
        year6: 104000,
        year7: 104000
    },
    {
        model: "LST008 α SSS",
        year4: 128000,
        year5: 128000,
        year6: 136000,
        year7: 136000
    },
    {
        model: "LST008 α SSSS",
        year4: 160000,
        year5: 160000,
        year6: 168000,
        year7: 168000
    }
];

