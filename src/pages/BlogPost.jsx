import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box, Avatar, Chip, Divider, Paper, IconButton } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Sample blog posts data
const blogPostsData = {
    1: {
        title: "Voice AI Assistants in Hotel Management: A Complete Implementation Guide",
        content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced hospitality industry, providing excellent customer service around the clock is crucial. This comprehensive guide will walk you through creating an AI-powered voice assistant specifically designed for hotel and resort booking management. This innovative solution combines speech recognition, natural language processing, and text-to-speech technology to offer a seamless, conversational experience for customers.</p>
      
      <h2>Benefits of Voice AI in Hospitality</h2>
      <ul>
        <li><strong>24/7 Availability:</strong> AI assistants handle inquiries and bookings round-the-clock</li>
        <li><strong>Enhanced Efficiency:</strong> Manage multiple queries simultaneously, reducing wait times</li>
        <li><strong>Consistency:</strong> Provide uniform information and service quality regardless of time or workload</li>
        <li><strong>Multilingual Support:</strong> Communicate in multiple languages, catering to diverse clientele</li>
        <li><strong>Cost Reduction:</strong> Lower operational costs associated with customer service staffing</li>
        <li><strong>Data Insights:</strong> Gather valuable data on customer preferences and common queries</li>
        <li><strong>Personalization:</strong> Remember guest preferences for tailored recommendations</li>
      </ul>

      <h2>Project Overview</h2>
      <p>The AI-powered voice assistant, named "Harsh," acts as a receptionist for an AI resort booking service. It handles room reservations, provides information about resort amenities, and maintains a friendly, conversational tone throughout interactions.</p>

      <h2>Key Components</h2>
      <h3>1. Speech Recognition</h3>
      <p>The system uses advanced speech recognition technology to accurately convert guest voice inputs into text, enabling natural conversation flow.</p>

      <h3>2. Natural Language Processing</h3>
      <p>Sophisticated AI algorithms process and understand guest requests, ensuring appropriate and contextual responses to inquiries.</p>

      <h3>3. Text-to-Speech Synthesis</h3>
      <p>High-quality voice synthesis technology converts AI responses into natural-sounding speech, creating a seamless conversational experience.</p>

      <h2>AI Assistant Capabilities</h2>
      <h3>Booking Management</h3>
      <ol>
        <li>Collect guest preferences for check-in and check-out dates</li>
        <li>Determine the number of guests and room requirements</li>
        <li>Check room availability and provide options</li>
        <li>Process reservations and confirm bookings</li>
        <li>Handle special requests and additional amenities</li>
      </ol>

      <h3>Information Services</h3>
      <ul>
        <li>Provide details about hotel facilities and services</li>
        <li>Answer queries about room amenities</li>
        <li>Explain booking policies and procedures</li>
        <li>Offer information about local attractions</li>
      </ul>

      <h2>Implementation Benefits</h2>
      <ul>
        <li><strong>Enhanced Customer Experience:</strong> Quick responses and personalized interactions improve guest satisfaction</li>
        <li><strong>Increased Bookings:</strong> 24/7 availability leads to higher conversion rates</li>
        <li><strong>Reduced Errors:</strong> Minimized mistakes in booking process</li>
        <li><strong>Scalability:</strong> Handle fluctuating inquiry volumes efficiently</li>
        <li><strong>Staff Optimization:</strong> Free human staff for complex tasks</li>
        <li><strong>Data Collection:</strong> Gather valuable insights into customer preferences</li>
        <li><strong>Brand Innovation:</strong> Showcase technological advancement in hospitality</li>
      </ul>

      <h2>Future Enhancements</h2>
      <p>The system can be extended with additional features:</p>
      <ul>
        <li><strong>Advanced Personalization:</strong> Learning from past interactions to provide more tailored experiences</li>
        <li><strong>Integration Capabilities:</strong> Connect with property management and CRM systems</li>
        <li><strong>Expanded Language Support:</strong> Add more languages and dialects for international guests</li>
        <li><strong>Analytics Dashboard:</strong> Visualize booking patterns and guest preferences</li>
        <li><strong>Smart Room Controls:</strong> Integration with IoT devices for room automation</li>
        <li><strong>Predictive Services:</strong> Anticipate guest needs based on historical data</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing a voice AI assistant in hotel management represents a significant step forward in automation and customer service. This system enhances both guest experience and operational efficiency while providing valuable insights for continuous improvement. As technology evolves, these AI assistants will become increasingly sophisticated, offering even more advanced features and capabilities for the hospitality industry.</p>
    `,
    image: "../../public/img/voiceai.jpeg",
    category: "Technology",
        author: {
            name: "Haresh Baraiya",
            avatar: "/api/placeholder/64/64",
            bio: "AI Solutions Architect & Hospitality Technology Specialist",
            credentials: "Computer Science"
        },
        date: "2024-03-15",
        readTime: "10 min read",
        tags: ["AI", "Hospitality", "Voice Technology", "Innovation", "Customer Service", "Digital Transformation"]
    },
    2: {
        title: "The Future of AI in Healthcare: Transforming Patient Care",
        content: `
      <h2>Introduction</h2>
      <p>Language models like GPT are trained on large datasets, usually up to a certain cut-off date. For example, a model might be trained on data available up to 2021. Despite the impressive capabilities of these models, they struggle with information that emerges after their training period. This limitation can lead to "hallucinations," where the model generates inaccurate or nonsensical responses due to the lack of updated knowledge.</p>
     
      <h2>Key Methods to Address Data Limitations</h2>
      <p>There are two primary methods to address this issue:</p>
      <ul>
        <li><strong>Fine-Tuning:</strong> This involves updating the model's parameters with new data.</li>
        <li><strong>Retrieval-Augmented Generation (RAG):</strong> This method retrieves relevant information from external sources to supplement the model's responses.</li>
      </ul>

      <h2>Fine-Tuning Overview</h2>
      <p>Fine-tuning is a well-known technique where new data is used to update the pre-trained parameters of a language model. This process ensures that the model can generate accurate responses based on the latest information. However, fine-tuning has its challenges:</p>
      <ul>
        <li>Resource Intensive: Traditional fine-tuning can be resource-intensive, especially for large models with billions of parameters.</li>
        <li>Complexity: Updating a vast number of parameters can be complex and time-consuming.</li>
      </ul>

      <h2>Introduction to RAG</h2>
      <p>Retrieval-Augmented Generation (RAG) offers a different approach by integrating external data sources without altering the model's parameters. Here's how it works:</p>
      <ul>
        <li><strong>External Data Source:</strong> RAG uses an external knowledge base or database that contains the latest information.</li>
        <li><strong>Query Processing:</strong> When a query is received, RAG searches the external data source for relevant information.</li>
        <li><strong>Response Generation:</strong> The retrieved information is then combined with the model's response to generate a comprehensive and accurate answer.</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>RAG is increasingly popular due to its practicality and efficiency. Some common applications include:</p>
      <ul>
        <li>Chatbots: Enhance chatbot responses with up-to-date information from specific knowledge bases.</li>
        <li>PDF Analysis: Analyze and generate responses based on the content of uploaded PDF documents.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Retrieval-Augmented Generation (RAG) is a versatile and efficient technique for enhancing language models with new information. By integrating external data sources, RAG overcomes the limitations of traditional fine-tuning, offering a more flexible and less resource-intensive solution.</p>
    `,
    image: "../../public/img/RAG.png",
    category: "Healthcare",
        author: {
            name: "Haresh Baraiya",
            avatar: "/api/placeholder/64/64",
            bio: "AI Research Lead",
            credentials: "Computer Science"
        },
        date: "2024-03-15",
        readTime: "8 min read",
        tags: ["Healthcare", "AI", "Machine Learning", "Medical Innovation"]
    },
    3: {

        title: "Building a Multi-Modal Chatbot with LangChain, ChatGPT, and DALL·E 3",
        content: `
      <h2>Introduction</h2>
      <p>In the field of Generative AI, agents have become a crucial element of innovation. They empower Large Language Models (LLMs) to reason better and perform complex tasks such as interfacing with external data sources. This includes performing Google searches, calling external APIs, or generating personalized images.</p>

      <h2>The Challenge of Living in the Real World</h2>
      <p>The main challenge involves retrieving information from the real world that falls outside the training scope of Large Language Models (LLM). This could be anything from executing calls to a proprietary API or supplying the LLM with data (such as files or images) it hasn't been trained on and then facilitating discussions based on this data.</p>

      <h2>The Role of Agents</h2>
      <p>Agents are equipped with various tools, including invoking external APIs, conducting Google searches, or generating images based on specific instructions. When presented with a user's task or query, the agent engages the LLM for reasoning, essentially decomposing the task into smaller, intermediate steps.</p>

      <h2>Three Main Tools for the Solution</h2>
      <p>The multi-modal chatbot is backed by an agent that uses three primary tools:</p>
      <ul>
        <li><strong>REST Countries API Chain:</strong> Enables retrieving information on countries</li>
        <li><strong>DALL·E 3 Image Generator:</strong> Generates images of countries based on the country name</li>
        <li><strong>Google Search Tool:</strong> Fetches information from the web</li>
      </ul>

      <h2>Technical Implementation</h2>
      <h3>Creating the Agent</h3>
      <pre><code>def create_agent():
    tools = [countries_image_generator, get_countries_by_name, google_search]
    functions = [convert_to_openai_function(f) for f in tools]
    model = ChatOpenAI(model_name="gpt-3.5-turbo-0125").bind(functions=functions)
    
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are helpful but sassy assistant"),
        MessagesPlaceholder(variable_name="chat_history"),
        ("user", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad")
    ])

    memory = ConversationBufferWindowMemory(
        return_messages=True,
        memory_key="chat_history",
        k=5
    )

    chain = RunnablePassthrough.assign(
        agent_scratchpad=lambda x: format_to_openai_functions(
            x["intermediate_steps"]
        )
    ) | prompt | model | OpenAIFunctionsAgentOutputParser()

    agent_executor = AgentExecutor(
        agent=chain,
        tools=tools,
        memory=memory,
        verbose=True
    )

    return agent_executor</code></pre>

      <h3>Custom Tools Implementation</h3>
      <h4>1. Countries Image Generator</h4>
      <pre><code>@tool
def countries_image_generator(country: str):
    """Call this to get an image of a country"""
    res = DallEAPIWrapper(model="dall-e-3").run(
        f"You generate image of a country representing the most typical country's characteristics, incorporating its flag. the country is {country}"
    )
    answer_to_agent = (
        f"Use this format- Here is an image of {country}: [{country} Image]"
        f"url= {res}"
    )
    return answer_to_agent</code></pre>

      <h4>2. Countries API Integration</h4>
      <pre><code>@tool(args_schema=RequestModel)
def get_countries_by_name(path_params: PathParams, params: Optional[Params] = None):
    """Useful for when you need to answer questions about countries."""
    BASE_URL = f'https://restcountries.com/v3.1/name/{path_params.name}'
    effective_params = {"fields": ",".join(params.fields)} if params and params.fields else None
    req = prepare_and_log_request(BASE_URL, effective_params)
    response = requests.get(req.url)
    response.raise_for_status()
    return response.json()</code></pre>

      <h4>3. Google Search Integration</h4>
      <pre><code>@tool
def google_search(query: str):
    """Performs a Google search using the provided query string."""
    return SerpAPIWrapper().run(query)</code></pre>

      <h2>Architecture Overview</h2>
      <p>The multi-modal chatbot follows a structured workflow:</p>
      <ol>
        <li><strong>Prompt Refinement:</strong> Initial user prompt and conversation history are processed</li>
        <li><strong>Thought Process:</strong> The agent reasons about the appropriate tool to use</li>
        <li><strong>Tool Invocation:</strong> Selected tool is executed</li>
        <li><strong>Observation:</strong> Tool output is processed for final response</li>
      </ol>

      <h2>Real-World Examples</h2>
      <p>The chatbot has demonstrated impressive capabilities in various scenarios:</p>
      <ul>
        <li>Generating country-specific images with DALL·E 3</li>
        <li>Retrieving current tourist statistics through Google search</li>
        <li>Accessing detailed country information via the REST Countries API</li>
        <li>Maintaining conversation context for follow-up questions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>This implementation showcases the power of combining different AI tools and APIs to create a versatile chatbot capable of handling complex, multi-modal interactions while maintaining context and providing accurate information from various sources.</p>
    `,
    image: "../../public/img/lang.jpeg",
    category: "Artificial Intelligence",
        author: {
            name: "Haresh Baraiya",
            avatar: "/api/placeholder/64/64",
            bio: "AI Software Architect",
            credentials: " AI Engineer"
        },
        date: "2024-03-15",
        readTime: "12 min read",
        tags: ["AI", "ChatGPT", "DALL·E", "LangChain", "Chatbots", "Programming"]
    },
    4: {
        title: "WhatsApp LLM Bots: Transforming Business Communication",
        content: `
      <h2>Introduction</h2>
      <p>WhatsApp LLM (Large Language Model) bots are revolutionizing how businesses communicate with their customers, offering powerful capabilities through the integration of advanced AI with the world's most popular messaging platform.</p>
     
      <h2>Key Components</h2>
      <h3>WhatsApp Business API</h3>
      <ul>
        <li><strong>Two-way communication:</strong> Enables programmatic sending and receiving of messages</li>
        <li><strong>Templated Messages:</strong> Automates communications using sanctioned templates</li>
        <li><strong>Webhooks:</strong> Enables real-time event handling</li>
      </ul>

      <h3>Large Language Models (LLMs)</h3>
      <ul>
        <li><strong>Natural Language Understanding:</strong> Comprehends user queries with context</li>
        <li><strong>Contextual Response:</strong> Generates relevant, informative responses</li>
        <li><strong>Continuous Learning:</strong> Improves through fine-tuning and data updates</li>
      </ul>

      <h2>Architectural Framework</h2>
      <h3>Front-end:</h3>
      <p>WhatsApp serves as the primary interface where users interact with the bot through their familiar messaging app.</p>

      <h3>Back-end Components:</h3>
      <ul>
        <li>WhatsApp Business API Integration</li>
        <li>LLM Integration</li>
        <li>NLP Pipeline</li>
        <li>Business Logic</li>
        <li>Database Management</li>
        <li>Middleware Integration</li>
      </ul>

      <h2>Business Applications</h2>
      <h3>Customer Service Excellence</h3>
      <ul>
        <li><strong>24/7 Support:</strong> Round-the-clock customer assistance</li>
        <li><strong>FAQ Automation:</strong> Instant responses to common queries</li>
        <li><strong>Personalized Recommendations:</strong> Tailored product/service suggestions</li>
      </ul>

      <h3>Sales and Marketing Enhancement</h3>
      <ul>
        <li>Lead Generation</li>
        <li>Product Promotions</li>
        <li>Appointment Scheduling</li>
        <li>Customer Surveys</li>
      </ul>

      <h3>E-commerce Integration</h3>
      <ul>
        <li>Order Tracking</li>
        <li>Product Inquiries</li>
        <li>Return/Refund Management</li>
        <li>Personalized Shopping Recommendations</li>
      </ul>

      <h2>Industry-Specific Applications</h2>
      <h3>Healthcare</h3>
      <ul>
        <li>Appointment Management</li>
        <li>Medication Reminders</li>
        <li>Health Advisory Services</li>
        <li>Telemedicine Support</li>
      </ul>

      <h3>Financial Services</h3>
      <ul>
        <li>Account Inquiries</li>
        <li>Payment Reminders</li>
        <li>Customer Support</li>
        <li>Personalized Financial Advice</li>
      </ul>

      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Enhanced Customer Service:</strong> Personal and prompt assistance</li>
        <li><strong>Operational Efficiency:</strong> Automation of routine tasks</li>
        <li><strong>Cost Reduction:</strong> Lower operational expenses</li>
        <li><strong>Data Insights:</strong> Valuable customer analytics</li>
      </ul>

      <h2>Implementation Considerations</h2>
      <ul>
        <li><strong>Data Privacy:</strong> Compliance with protection laws</li>
        <li><strong>Bias Management:</strong> Ensuring fair and unbiased responses</li>
        <li><strong>Continuous Improvement:</strong> Regular updates and fine-tuning</li>
      </ul>
    `,
        image: "../../public/img/ai1.jpg",
        category: "Technology",
        author: {
            name: "Haresh Baraiya",
            avatar: "/api/placeholder/64/64",
            bio: "AI Solutions Architect",
            credentials: "AI Engineer"
        },
        date: "2024-03-15",
        readTime: "10 min read",
        tags: ["WhatsApp", "AI", "Chatbots", "Business", "Technology", "LLM"]
    },
};

const BlogPost = () => {
    const { id } = useParams();
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const post = blogPostsData[id];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const numberOfPoints = 100;

            for (let i = 0; i < numberOfPoints; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    color: `rgba(25, 118, 210, ${Math.random() * 0.5 + 0.3})`
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    particle.vx += dx * force * 0.02;
                    particle.vy += dy * force * 0.02;
                }

                particles.forEach((otherParticle, j) => {
                    if (i !== j) {
                        const dx = otherParticle.x - particle.x;
                        const dy = otherParticle.y - particle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(25, 118, 210, ${(150 - distance) / 150 * 0.2})`;
                            ctx.lineWidth = (150 - distance) / 150;
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.stroke();
                        }
                    }
                });

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        handleResize();
        createParticles();
        animate();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]);

    // Handle share functionality
    // Handle share functionality
    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Check out this article: ${post.title}`;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
                break;
            default:
                break;
        }
    };

    if (!post) {
        return (
            <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#000B2C' }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                />
                <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                    <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>Blog post not found</Typography>
                    <Link
                        to="/blog"
                        style={{
                            color: '#4A9DFF',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <ArrowBackIcon /> Return to blog list
                    </Link>
                </Container>
            </Box>
        );
    }
    const renderContent = () => (
        <Box
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                '& h2': {
                    color: 'white',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mt: 6,
                    mb: 3,
                    borderBottom: '2px solid rgba(25, 118, 210, 0.3)',
                    pb: 2
                },
                '& p': {
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                '& ul': {
                    pl: 4,
                    mb: 4
                },
                '& li': {
                    mb: 2,
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                '& strong': {
                    color: '#4A9DFF',
                    fontWeight: 600
                },
                '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    mb: 4
                }
            }}
        />
    );

    // Share section component
    const renderShareSection = () => (
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            mt: 4,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Share this article:</Typography>
            {[
                { icon: <FacebookIcon />, platform: 'facebook', color: '#4267B2' },
                { icon: <TwitterIcon />, platform: 'twitter', color: '#1DA1F2' },
                { icon: <LinkedInIcon />, platform: 'linkedin', color: '#0077B5' }
            ].map((social) => (
                <IconButton
                    key={social.platform}
                    onClick={() => handleShare(social.platform)}
                    sx={{
                        color: social.color,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                            bgcolor: `${social.color}20`,
                            transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    {social.icon}
                </IconButton>
            ))}
        </Box>
    );

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#000B2C' }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                {/* Back Navigation */}
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#4A9DFF',
                        mb: 4,
                        width: 'fit-content',
                        '&:hover': {
                            color: '#90caf9',
                            transform: 'translateX(-5px)'
                        },
                        transition: 'all 0.3s ease'
                    }}>
                        <ArrowBackIcon />
                        <Typography>Back to Blog</Typography>
                    </Box>
                </Link>

                {/* Main Content Paper */}
                <Paper sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, sm: 3, md: 4 },
                    mb: 4
                }}>
                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                        <Chip
                            label={post.category}
                            sx={{
                                bgcolor: 'rgba(25, 118, 210, 0.2)',
                                color: '#4A9DFF',
                                fontWeight: 500,
                            }}
                        />
                        {post.tags.map(tag => (
                            <Chip
                                key={tag}
                                label={tag}
                                variant="outlined"
                                sx={{
                                    borderColor: 'rgba(74, 157, 255, 0.3)',
                                    color: '#4A9DFF',
                                    '&:hover': {
                                        borderColor: '#4A9DFF',
                                        background: 'rgba(74, 157, 255, 0.1)'
                                    }
                                }}
                            />
                        ))}
                    </Box>

                    {/* Title */}
                    <Typography variant="h1" sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 4,
                        color: 'white',
                        textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
                    }}>
                        {post.title}
                    </Typography>

                    {/* Featured Image */}
                    <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                            width: '100%',
                            height: { xs: '200px', sm: '300px', md: '400px' },
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 4,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    />

                    {/* Author & Meta Information */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 3,
                        alignItems: { xs: 'flex-start', md: 'center' },
                        mb: 6,
                        p: 3,
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.05)'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                                src={post.author.avatar}
                                sx={{
                                    width: 64,
                                    height: 64,
                                    border: '2px solid rgba(74, 157, 255, 0.3)'
                                }}
                            />
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 600 }}>
                                    {post.author.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    {post.author.bio}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            gap: 3,
                            ml: { md: 'auto' },
                            color: 'rgba(255, 255, 255, 0.7)'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarTodayIcon />
                                <Typography>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TimerIcon />
                                <Typography>{post.readTime}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Blog Content */}
                    {renderContent()}
                    {/* Share Section */}
                    {renderShareSection()}
                </Paper>
            </Container>
        </Box>
    );
};

export default BlogPost;