"use client"

import { Link, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function QrCodesGenerator() {

    const [url, setUrl] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [bgColor, setBgColor] = useState("#037fff");
    const [logo, setLogo] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [qrType, setQrType] = useState("url");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="relative z-30 mx-6 my-4 flex max-w-[1250px] w-full min-h-[750px] h-full">
            <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-blue">
                        Générateur de Qr Codes
                    </CardTitle>
                    <CardContent className="flex-1">
                        <div className="h-full flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-6">
                                <Tabs
                                    defaultValue="url"
                                    onValueChange={(val) => setQrType(val)}
                                    className="space-y-6">
                                    <TabsList className="w-full grid grid-cols-2 bg-blue text-lg">
                                        <TabsTrigger value="url" className="font-white font-bold">
                                            <Link className="w-4 h-4 mr-2" />Url</TabsTrigger>
                                        <TabsTrigger value="email" className="font-white font-bold">
                                            <Mail className="w-4 h-4 mr-2" />Email</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="url">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="url" className="font-semibold text-blue">Url</Label>
                                                <Input type="text" id="url"
                                                    value={url}
                                                    onChange={(e) => setUrl(e.target.value)}
                                                    className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                    placeholder="https://exemple.com"
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="email">
                                        <div className="space-y-6">
                                            <div>
                                                <Label htmlFor="email" className="font-semibold text-blue">Email</Label>
                                                <Input type="email" id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                    placeholder="exemple@exemple.com"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="subject" className="font-semibold text-blue">Sujet</Label>
                                                <Input type="text" id="subject"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                    placeholder="Saisir l'objet de l'email"
                                                />
                                            </div>
                                            <div className="">
                                                <Label htmlFor="su" className="font-semibold text-blue">Message</Label>
                                                <Textarea id="message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="resize-none w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                    placeholder="Saisir le message de l'email"
                                                />
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                                <div className="space-y-4'">
                                    <div className="flex space-x-4">
                                        <div className="space-y-2 flex-1">
                                            <Label htmlFor="color" className="font-semibold text-blue">Couleur Qr Code</Label>
                                            <div className="flex items-center gap-1">
                                                <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                                    style={{ backgroundColor: color }} >
                                                    <Input type="color" id="color"
                                                        value={color}
                                                        onChange={(e) => setColor(e.target.value)}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                </div>
                                                <Input type="text"
                                                    value={color}
                                                    onChange={(e) => setColor(e.target.value)}
                                                    className="flex-1 border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <Label htmlFor="bgcolor" className="font-semibold text-blue">Couleur Arrière Plan</Label>
                                            <div className="flex items-center gap-1">
                                                <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                                    style={{ backgroundColor: bgColor }} >
                                                    <Input type="color" id="bgcolor"
                                                        value={bgColor}
                                                        onChange={(e) => setBgColor(e.target.value)}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                </div>
                                                <Input type="text"
                                                    value={bgColor}
                                                    onChange={(e) => setBgColor(e.target.value)}
                                                    className="flex-1 border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="logo" className="font-semibold text-blue">Logo</Label>
                                        <Input type="file" id="logo" accept="image/*"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    setLogoFile(e.target.files[0]);

                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setLogo(reader.result as string)
                                                    };
                                                    reader.readAsDataURL(e.target.files[0]);
                                                }
                                            }}
                                            className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex-1 bg-blue rounded-lg flex flex-col justify-center space-y-6">

                            </div>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
};

