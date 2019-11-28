import React from 'react';

import Navbar from '../components/core/Navbar'
import Footer from '../components/core/Footer'

import SliderHero from '../components/feature/SliderHero';
import FeaturedAlbums from '../components/feature/FeaturedAlbums';
import SpotlightArtist from '../components/feature/SpotlightArtist';
import Quote from '../components/feature/Quote';

import InstallButton from '../components/core/installBtn';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            installPrompt: true,
            installButton: true 
        }

        this.installApp = this.installApp.bind(this);
    }


    installApp = async () => {
        let { installPrompt } = this.state;

        if(!installPrompt) return false;
        installPrompt.prompt();
        let outcome = await installPrompt.userChoice;
        if(outcome.outcome === 'accepted'){
          console.log("App Installed")
        } else{
          console.log("App not installed");
        }
        // Remove the event reference
        installPrompt=null;
        // Hide the button
        this.setState({
          installButton: false
        })
      }

    componentDidMount() {
        let { installPrompt } = this.state;
        document.title = 'Soundclout'

        console.log("Listening for Install prompt");
        window.addEventListener('beforeinstallprompt',e=>{
            // For older browsers
            e.preventDefault();
            console.log("Install Prompt fired");
            installPrompt = e;
            // See if the app is already installed, in that case, do nothing
            if((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true){
            return false;
            }
            // Set the state variable to make button visible
            this.setState({
              installButton: true
            })
        })
    }

    render () {
        const { installButton } = this.state;
        return (
        <>
        <Navbar 
            logo="Soundclout"
            link_one="Home"
            link_two="Albums"
            link_three="Community"
        />
        <SliderHero />
        <FeaturedAlbums />
        <SpotlightArtist 
            class="drake"
            link="https://www.instagram.com/champagnepapi/?hl=en"
            overlay="Click for more Drake"
            artist="Drake"
            bio="During his creative peak, from 2011’s Take Care through 2015’s If You’re Reading This It’s Too Late, 
            Drake processed his memory through his music. He plumbed the depths of his skyrocketing stardom, 
            processing it all with a weary stream-of-consciousness. It was almost as if he was rapping names, places, 
            and scenes as a way to remember them. (Never forget Courtney, from Hooters, on Peachtree.) Some songs included 
            snippets of voicemails from irritated girlfriends. Others felt like rhyming notes to self, including one where 
            he spent four minutes apologizing to his mother."
            btn="More Drake"
        />
        <Quote 
            title="Find A Sound That Fits You"
            content='"There is something here for everyone! Find your sound, create your own wave find music and a sound that speaks to you. That is why we are here that is what Soundclout is all about."'
            author="Thomas McKyer"
            position="Founder, Soundclout"
        />
        <Footer />
        <InstallButton
           condition={installButton}
            //  style={styles.installBtn}
           onClick={this.installApp}>
               Install app!
        </InstallButton>
        </>
    )
    }
}

export default Index;