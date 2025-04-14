
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Resources</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Explore our collection of resources, case studies, and information about our technology and company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Card */}
          <Card className="bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">About Us</CardTitle>
              <CardDescription className="text-gray-300">Learn more about our company's mission and vision</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p>Discover the story behind S10.AI and our commitment to revolutionizing healthcare with cutting-edge AI technology.</p>
            </CardContent>
            <CardFooter>
              <Link to="/resources/about">
                <Button variant="outline" className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-900/20">
                  Explore
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Technology Card */}
          <Card className="bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Our Technology</CardTitle>
              <CardDescription className="text-gray-300">Explore the technology behind our solutions</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p>Learn about our cutting-edge AI technology and how it's transforming healthcare workflows and documentation.</p>
            </CardContent>
            <CardFooter>
              <Link to="/resources/technology">
                <Button variant="outline" className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-900/20">
                  Explore
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Case Studies Card */}
          <Card className="bg-black/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Case Studies</CardTitle>
              <CardDescription className="text-gray-300">Real-world success stories</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-400">
              <p>Browse through our collection of case studies showcasing how our AI solutions have transformed healthcare practices.</p>
            </CardContent>
            <CardFooter>
              <Link to="/resources/casestudies">
                <Button variant="outline" className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-900/20">
                  Explore
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
