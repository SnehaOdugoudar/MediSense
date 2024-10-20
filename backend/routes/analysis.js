const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/analyze-voice', async (req, res) => {
    try {
        const response = await axios.post('https://api.hume.ai/v0/evi/configs', 
            {
                evi_version: "2",
                name: "Meditation Analysis Config",
                // prompt: {
                //     id: "RQ0ggAUzz0MRGapG57NAC0BByHiTZLMl4GlGWbzEbsqyGK1e",
                //     version: 0
                // },
                voice: {
                    provider: "HUME_AI",
                    name: "AURA"
                }
            },
            {
                headers: {
                    'X-Hume-Api-Key': process.env.HUME_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('Hume API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Hume API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Error analyzing voice' });
    }
});

module.exports = router;
