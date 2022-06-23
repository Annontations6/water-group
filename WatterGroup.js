import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "Watter_group";
var name = "Watter Group";
var description = "Hello: Im do creating a theory avaiable for visual studio code i think now these html from older version. \nJavascript coding after version at get show platform theory hats reach 1e150 tau! \nChangelog: \nv1.0.0: \nRelease! \n\nGo missng at endgame for 1e1500 rho and finsh theory \nNew Content Coming Soon...";
var authors = "Annontations6";
var version = "1.0.0";

var currency;
var c1, c2, a1, dt, t1, t2, t3;
var c1Exp, c2Exp, dtExp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();
    currency_t = theory.createCurrency("t", "t");
    currency_Y = theory.createCurrency("Y", "Y");

    currency_Y.value = BigNumber.ONE;

    ///////////////////
    // Regular Upgrades

    // c1
    {
        let getDesc = (level) => "c_1=" + getC1(level).toString(0);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(15, Math.log2(2))));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level), getDesc(c1.level + amount));
    }

    // c2
    {
        let getDesc = (level) => "c_2=2^{" + level + "}";
        let getInfo = (level) => "c_2=" + getC2(level).toString(0);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(5, Math.log2(10)));
        c2.getDescription = (_) => Utils.getMath(getDesc(c2.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c2.level), getInfo(c2.level + amount));
    }

    // a1
    {
        let getDesc = (level) => "a_1=3^{" + level + "}";
        let getInfo = (level) => "a_1=" + getA1(level).toString(0);
        a1 = theory.createUpgrade(2, currency, new ExponentialCost(1e6, Math.log2(100)));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getInfo(a1.level), getInfo(a1.level + amount));
    }
    
    // dt
    {
        let getDesc = (level) => "dt=" + getDT(level).toString(0);
        dt = theory.createUpgrade(3, currency, new FirstFreeCost(new ExponentialCost(1e100, Math.log2(1e100))));
        dt.getDescription = (_) => Utils.getMath(getDesc(dt.level));
        dt.getInfo = (amount) => Utils.getMathTo(getDesc(dt.level), getDesc(dt.level + amount));
    }

    // t1
    {
        let getDesc = (level) => "t_1=" + getT1(level).toString(0);
        t1 = theory.createUpgrade(4, currency, new ExponentialCost(BigNumber.from("1e1500"), Math.log2(1)));
        t1.getDescription = (_) => Utils.getMath(getDesc(t1.level));
        t1.getInfo = (amount) => Utils.getMathTo(getDesc(t1.level), getDesc(t1.level + amount));
        t1.maxLevel = 1;
    }

    // t2
    {
        let getDesc = (level) => "t_2=" + getT2(level).toString(0);
        t2 = theory.createUpgrade(5, currency, new ExponentialCost(BigNumber.from("1e1500"), Math.log2(1)));
        t2.getDescription = (_) => Utils.getMath(getDesc(t2.level));
        t2.getInfo = (amount) => Utils.getMathTo(getDesc(t2.level), getDesc(t2.level + amount));
        t2.maxLevel = 1;
    }

    // t3
    {
        let getDesc = (level) => "t_3=" + getT3(level).toString(0);
        t3 = theory.createUpgrade(6, currency, new ExponentialCost(BigNumber.from("ee4"), Math.log2(1)));
        t3.getDescription = (_) => Utils.getMath(getDesc(t2.level));
        t3.getInfo = (amount) => Utils.getMathTo(getDesc(t2.level), getDesc(t2.level + amount));
        t3.maxLevel = 1;
    }


    /////////////////////
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency, 1e16);
    theory.createBuyAllUpgrade(1, currency, 1e40);
    theory.createAutoBuyerUpgrade(2, currency, 1e120);

    ///////////////////////
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(35, 10));

    {
        c1Exp = theory.createMilestoneUpgrade(0, 3);
        c1Exp.description = Localization.getUpgradeIncCustomExpDesc("c_1", "0.05");
        c1Exp.info = Localization.getUpgradeIncCustomExpInfo("c_1", "0.05");
        c1Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c2Exp = theory.createMilestoneUpgrade(1, 3);
        c2Exp.description = Localization.getUpgradeIncCustomExpDesc("c_2", "0.05");
        c2Exp.info = Localization.getUpgradeIncCustomExpInfo("c_2", "0.05");
        c2Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
    
    {
        dtExp = theory.createMilestoneUpgrade(2, 3);
        dtExp.description = Localization.getUpgradeIncCustomExpDesc("dt", "0.1");
        dtExp.info = Localization.getUpgradeIncCustomExpInfo("dt", "0.1");
        dtExp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
    
    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "You Played!", "i think so good!", () => true);
    achievement2 = theory.createAchievement(1, "whiles ten tau", "Reach 10 Tau Go These?", () => currency_t.value > 10);
    achievement3 = theory.createAchievement(2, "30 Tau!", "Reach 30 tau", () => currency_t.value> 30);
    achievement4 = theory.createAchievement(3, "100 Tau is Know!", "Reach 100 tau", () => currency_t.value > 100);
    achievement5 = theory.createAchievement(4, "COOL", "Reach 696 tau", () => currency_t.value > 696);
    achievement6 = theory.createAchievement(5, "I something ten thousand", "Reach 10,000 tau", () => currency_t.value > 10000);
    achievement7 = theory.createAchievement(6, "Nice", "Reach 69,420 tau", () => currency_t.value > 69420);
    achievement8 = theory.createAchievement(7, "Million", "Reach e6 tau", () => currency_t.value > 1e6);
    achievement9 = theory.createAchievement(8, "Await", "Reach 27,099,612 tau", () => currency_t.value > 27099612);
    achievement10 = theory.createAchievement(9, "Dubai Meter Million", "Reach 8.28e8 tau", () => currency_t.value > 8.28e8);
    achievement11 = theory.createAchievement(10, "Nice^2", "Reach 69,420^2 or 4.82e9 tau", () => currency_t.value > 4819136400);
    achievement12 = theory.createAchievement(11, "2 Digit Digit Tau", "Reach 1.00e10 tau", () => currency_t.value > 1e10);
    achievement13 = theory.createAchievement(12, "Trillion a lot", "Reach 1.00e12 tau", () => currency_t.value > 1e12);
    achievement14 = theory.createAchievement(13, "Nice^3", "Reach 3.34e14 tau", () => currency_t.value > 3.34e14);
    achievement15 = theory.createAchievement(14, "Quadrillion", "Reach 1.00e15 tau", () => currency_t.value > 1e15);
    achievement16 = theory.createAchievement(15, "Quintillion", "Reach 1.00e18 tau",() => currency_t.value > 1e18);
    achievement17 = theory.createAchievement(16, "Sextillion", "Reach 1.00e21 tau",() => currency_t.value > 1e21);
    achievement18 = theory.createAchievement(17, "Septillion", "Reach 1.00e24 tau",() => currency_t.value > 1e24);
    achievement19 = theory.createAchievement(18, "Funny", "Reach 1.00e25 tau",() => currency_t.value > 1e25);
    achievement20 = theory.createAchievement(19, "Octillion", "Reach 1.00e27 tau",() => currency_t.value > 1e27);
    achievement21 = theory.createAchievement(20, "Nonillion", "Reach 1.00e30 tau",() => currency_t.value > 1e30);
    achievement22 = theory.createAchievement(21, "Nice^10", "Reach 69420^10^1 or 2.59 quindecillion tau",() => currency_t.value > 2.59e48);
    achievement23 = theory.createAchievement(22, "Vigintillion", "Reach 1.00e63 tau",() => currency_t.value > 1e63);
    achievement24 = theory.createAchievement(23, "Nice", "Reach 1.00e69 tau",() => currency_t.value > 1e69);
    achievement25 = theory.createAchievement(24, "Terra group", "Reach 1.00e75 tau",() => currency_t.value > 1e63);
    achievement26 = theory.createAchievement(25, "Nice^20", "Reach 6.75e96 tau",() => currency_t.value > 6.75e96);
    achievement27 = theory.createAchievement(26, "I 3 Digit Digit Tau", "Reach 1.00e100 tau",() => currency_t.value > 1e100);
    achievement28 = theory.createAchievement(27, "Nice^25", "Reach 1.08e121 tau",() => currency_t.value > 1.08e121);
    achievement29 = theory.createAchievement(28, "Quadragintillion", "Reach 1.00e123 tau",() => currency_t.value > 1e123);
    achievement30 = theory.createAchievement(29, "Close to end", "Reach 1.00e144 tau i think!",() => currency_t.value > 1e144);
    achievement30 = theory.createAchievement(30, "How?", "Reach 1.00e150 tau and finsh this theory.",() => currency_t.value > 1e150);


    ///////////////////
    //// Story chapters
    chapter1 = theory.createStoryChapter(0, "Welcome and back!", "Welcome and back! \ni good so get can theory tau reach e150 tau! \nhello go simple so get gg mine do? \nyes for there note:C1 to nothing for browser. \nyour yes find so reaching e150 tau!", () => true);
    chapter2 = theory.createStoryChapter(1, "Wow didnt", "coming soon... \nafter this back... \nknow this game is know gggggggg hi!", () => currency_t.value > 1e3);

    updateAvailability();
}

var updateAvailability = () => {
    c2Exp.isAvailable = c1Exp.level > 0;
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency_Y.value += getDT(dt.level).pow(getDTExponent(dtExp.level))
    currency_t.value = currency.value.pow(0.1)
    currency.value += dt * bonus * currency_Y.value * getC1(c1.level).pow(getC1Exponent(c1Exp.level)) *
                                                      getC2(c2.level).pow(getC2Exponent(c2Exp.level)) *
                                                      getA1(a1.level);
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = c_1";

    if (c1Exp.level == 1) result += "^{1.05}";
    if (c1Exp.level == 2) result += "^{1.1}";
    if (c1Exp.level == 3) result += "^{1.15}";

    result += "c_2";

    if (c2Exp.level == 1) result += "^{1.05}";
    if (c2Exp.level == 2) result += "^{1.1}";
    if (c2Exp.level == 3) result += "^{1.15}";
    
    result += "dt";

    if (dtExp.level == 1) result += "^{1.1}";
    if (dtExp.level == 2) result += "^{1.2}";
    if (dtExp.level == 3) result += "^{1.3}";

    return result;
}

var getSecondaryEquation = () => theory.latexSymbol + "=\\max\\rho";
var getPublicationMultiplier = (tau) => tau.pow(0.211) / BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.164}}{3}";
var getTau = () => currency.value.pow(0.1);
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var getC1 = (level) => Utils.getStepwisePowerSum(level, 5, 10, 0);
var getC2 = (level) => BigNumber.TWO.pow(level);
var getA1 = (level) => BigNumber.THREE.pow(level);
var getDT = (level) => BigNumber.from(0.3 + 0.3 * level);
var getT1 = (level) => BigNumber.from(1 + 0.5 * level);
var getT2 = (level) => BigNumber.from(1 + 0.5 * level);
var getT3 = (level) => BigNumber.from(0 + 0.15 * level);
var getC1Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC2Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getDTExponent = (level) => BigNumber.from(1 + 0.1 * level);

init();
