import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://wktqdwuiwndfrpuetibp.supabase.co";
const SUPABASE_SERVICE_KEY =
  process.env.SUPABASE_SERVICE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdHFkd3Vpd25kZnJwdWV0aWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mzg3MzgwMSwiZXhwIjoyMDg5NDQ5ODAxfQ.s5gagDJazVLcCd_pbOR4--SRpbVsVnZjhAPI9YZPeEo";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Pre-translated content for each article (translated by Claude)
const translations: Record<string, { content_en: string; practical_takeaway_en: string }> = {
  // 1. Video game industry employment crisis
  "2359aa7f-baa3-46ef-9801-1f538602f1fb": {
    content_en: `<p>The video game industry is often an early indicator of tech trends, and it's now sending a concerning signal: <strong>thousands of developers are losing their jobs</strong> as companies integrate artificial intelligence tools.</p><p>A recent analysis shows that professionals in areas such as graphic design, animation, scriptwriting, and testing are being particularly affected. Companies argue that AI allows them to do in hours what previously took weeks.</p><p><strong>Which jobs are being most affected?</strong></p><p>The most impacted roles are those involving repetitive tasks or following predictable patterns: creating variations of secondary characters, generating background textures, writing dialogue for non-main characters, and performing basic functionality tests.</p><p>However, positions requiring <strong>creative vision, art direction, and strategic decision-making</strong> are not only holding steady but gaining importance. Someone must decide what to ask the AI and evaluate whether the result is good.</p><p><strong>Lessons for professionals in other industries</strong></p><p>What's happening in gaming foreshadows changes in marketing, design, media, and consulting. The professionals who thrive are those who position themselves as <strong>"orchestra conductors"</strong> of AI tools, not as individual task executors.</p><p>The key is developing supervisory skills, quality judgment, and strategic thinking. Knowing how to use AI isn't enough; what's valuable is knowing <strong>when to use it, how to evaluate it, and how to improve its results</strong>.</p>`,
    practical_takeaway_en: `Analyze which parts of your current work could be automated and start developing the skills AI cannot replace: professional judgment, client relationships, and the ability to direct and evaluate AI-generated work.`,
  },

  // 2. Anthropic Skills
  "c117ff39-56a1-4df0-bf30-39ea18f3d6e8": {
    content_en: `<p>Imagine an assistant that not only understands your instructions but <strong>remembers how you like to work</strong>. Anthropic, the company behind Claude, is developing exactly that with its "Skills" system.</p><p>It works like training a new employee: at first you need to explain everything in detail, but over time they learn your preferences, the company's communication tone, the formats you use, and even the exceptions to the rules.</p><p><strong>What are Skills in practice?</strong></p><p>Skills are sets of instructions and examples that teach Claude to perform specific tasks for your company. For example, you can create a Skill so that Claude drafts business proposals in the exact format your sales team uses, or analyzes financial reports highlighting the indicators that matter most to your management.</p><p>The main advantage is <strong>consistency</strong>: once configured, anyone on your team gets similar results when using that Skill, regardless of how well or poorly they write their instructions.</p><p><strong>How is this different from simply giving instructions?</strong></p><p>Giving Claude instructions each time is like explaining to someone new how to do something on every occasion. Skills are like having a procedures manual that Claude follows automatically. It's the difference between improvising and having an established process.</p><p>Companies already implementing this methodology report <strong>reducing repetitive task time by up to 70%</strong>, since they don't need to re-explain context every time they use the tool.</p>`,
    practical_takeaway_en: `If you use Claude in your company, start documenting the instructions that work best for your frequent tasks. These will become your first 'Skills' when the feature becomes widely available, giving you an advantage over competitors starting from scratch.`,
  },

  // 3. Anthropic copyright lawsuit
  "22835d74-6808-456b-8be0-277d1ba8a9b7": {
    content_en: `<p>If you use Claude (Anthropic's AI assistant) or any other artificial intelligence tool, there's a legal case that could affect the future of the entire industry. <strong>The Bartz v. Anthropic lawsuit</strong> questions whether AI companies have the right to use copyrighted works to train their models.</p><p>Think of it this way: when Claude or ChatGPT learned to write, they "read" millions of books, articles, and texts from the internet. <strong>Some of those texts have owners who never gave permission</strong> for a computer to use them as learning material.</p><p><strong>Why does this matter?</strong></p><p>The Free Software Foundation has just issued a statement about this case, pointing out the implications for free software and copyright in general. If the courts determine that training AI with protected content is illegal, the consequences would be enormous.</p><p>Imagine being told your brain can't remember books you've read because you didn't pay a special license. It sounds absurd, but that's essentially the legal debate: <strong>is learning from something the same as copying it?</strong></p><p><strong>What's at stake</strong></p><p>If Anthropic loses this case, we could see significant changes in how the AI tools we use daily function. Costs could increase (to pay for licenses) or capabilities could be reduced (if they must avoid certain content).</p><p>On the other hand, content creators argue that their work has value and that multibillion-dollar tech companies shouldn't be able to use it for free.</p><p>There's no easy answer, but <strong>this case will define the rules of the game</strong> for the entire AI industry in the coming years. As users, it's in our best interest to understand what's happening.</p>`,
    practical_takeaway_en: `For now, you can continue using Claude and other AI tools normally. However, stay informed about these legal cases: they could result in price changes or feature modifications in the future. If you create original content, this debate directly affects you as well.`,
  },

  // 4. GPT-5.4 mini
  "f90a8f4a-881c-442c-b00d-37c80f13d8bb": {
    content_en: `<p>OpenAI continues expanding its artificial intelligence model catalog with the launch of <strong>GPT-5.4 mini</strong>, a version designed to be faster and more affordable than its bigger siblings.</p><p>Think of AI models like cars. You have the luxury sports car (full GPT-5.4) that's extremely powerful but guzzles gas, and now you have an efficient sedan (GPT-5.4 mini) that gets you where you need to go for a fraction of the cost. <strong>For most daily commutes, the sedan is more than enough.</strong></p><p><strong>What does "mini" mean in this context?</strong></p><p>It doesn't mean less intelligent for common tasks. It means it's optimized to respond faster and process more queries without driving up costs. For companies using OpenAI's API in their products, this can represent <strong>significant savings on their monthly bill</strong>.</p><p>For individual ChatGPT users, this translates to snappier responses when you don't need the deepest possible analysis.</p><p><strong>OpenAI's strategy</strong></p><p>This trend of offering "mini" versions reflects how the AI market is maturing. Not everyone needs the most powerful model for every task. If you just want to summarize an email or proofread a text, using the most advanced model is like using a cannon to kill a fly.</p><p>OpenAI is recognizing that different needs require different tools. <strong>This democratizes access</strong>: more Latin American companies can integrate AI into their products without processing costs becoming prohibitive.</p><p>It also means we'll see more applications and services incorporating artificial intelligence, because it's now more economically viable.</p>`,
    practical_takeaway_en: `If you use ChatGPT or are considering integrating AI into your business, pay attention to which model you use for each task. Using the 'mini' version for simple tasks can save you money without sacrificing quality. Ask yourself: do I really need the most powerful model for this?`,
  },

  // 5. ChatGPT 50M paying users
  "992c3437-59ae-4427-853a-d5c96f40203a": {
    content_en: `<p>If you ever thought ChatGPT was just a passing fad or a tech toy, the numbers tell a different story. <strong>OpenAI has just confirmed that 50 million people pay monthly to use ChatGPT Plus</strong>, the premium version of its artificial intelligence assistant.</p><p>To put it in perspective: that's more than the entire population of Colombia or Argentina. And each of those people is paying around 20 dollars per month because they consider the tool worth the investment.</p><p><strong>Why does this number matter?</strong></p><p>When millions of people pull out their credit cards to pay for a tool, they're voting with their wallets. It's not casual curiosity: it's a decision that this technology saves them time, helps them work better, or solves real problems.</p><p>Paying users are typically professionals who use ChatGPT to draft documents, analyze information, prepare presentations, code, translate, or research. In other words, <strong>tasks that used to take hours and now get done in minutes</strong>.</p><p><strong>The message for Latin America</strong></p><p>This growth confirms a trend we're already seeing in the region: companies adopting AI tools are gaining real competitive advantages. It's not about replacing employees, but about multiplying what each person can accomplish.</p><p>Think of it this way: if your competition is using these tools and you're not, it's like they have calculators and you're still doing math by hand. Both can reach the same result, but one will do it much faster.</p><p>The question is no longer whether AI will be relevant to your work. <strong>The question is how much longer you can wait before adopting it.</strong></p>`,
    practical_takeaway_en: `If you haven't yet explored ChatGPT or other AI tools for your work, now is the time. 50 million professionals have already decided it's worth investing in. Identify a repetitive task in your daily routine and try how AI can help you do it faster.`,
  },
};

async function main() {
  // Fetch untranslated news
  const { data, error } = await supabase
    .from("news_items")
    .select("id, title, raw_data")
    .not("raw_data", "is", null)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching news:", error);
    process.exit(1);
  }

  const untranslated = data?.filter((r) => r.raw_data && !r.raw_data.content_en) || [];
  console.log(`Found ${untranslated.length} untranslated news items\n`);

  let updated = 0;
  for (const row of untranslated) {
    const translation = translations[row.id];
    if (!translation) {
      console.log(`⚠ No translation found for: ${row.id} — ${row.title}`);
      continue;
    }

    const updatedRawData = {
      ...row.raw_data,
      content_en: translation.content_en,
      practical_takeaway_en: translation.practical_takeaway_en,
    };

    const { error: updateError } = await supabase
      .from("news_items")
      .update({ raw_data: updatedRawData })
      .eq("id", row.id);

    if (updateError) {
      console.error(`✗ Failed to update ${row.id}:`, updateError);
    } else {
      console.log(`✓ Updated: ${row.title}`);
      updated++;
    }
  }

  console.log(`\nDone: ${updated}/${untranslated.length} articles translated`);
}

main();
