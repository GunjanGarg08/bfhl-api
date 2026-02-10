const { isPrime, gcd, lcm } = require("../utils/math.utils");
const { getAIResponse } = require("../utils/ai.utils");

exports.handleBFHL = async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL,
        error: "Exactly one key is required"
      });
    }

    const key = keys[0];
    let data;

    switch (key) {
      case "fibonacci": {
        const n = req.body.fibonacci;
        if (!Number.isInteger(n) || n < 1) throw new Error("Invalid fibonacci input");
        const fib = [0, 1];
        for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
        data = fib.slice(0, n);
        break;
      }

      case "prime":
        data = req.body.prime.filter(isPrime);
        break;

      case "lcm":
        data = req.body.lcm.reduce((a, b) => lcm(a, b));
        break;

      case "hcf":
        data = req.body.hcf.reduce((a, b) => gcd(a, b));
        break;

      case "AI":
        data = await getAIResponse(req.body.AI);
        break;

      default:
        throw new Error("Invalid key");
    }

    return res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });

  } catch (err) {
    return res.status(400).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      error: err.message
    });
  }
};
