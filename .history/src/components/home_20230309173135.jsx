import React, { useState, useEffect }  from 'react';

function Home() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gadgets, setGadget] = useState([]);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b")
            .then(res => res.json())
            //.then(data => console.log(data));
            .then(
                (data) => {
                    setIsLoaded(true);
                    setGadget(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])


  return (
    <div id="root">
        <div className="_src_components_resets_module__clapyResets _src_App_module__root">
            <div className="_src_components_resets_module__clapyResets _src_components_Main_Main_module__root">

                <div className="_src_components_resets_module__clapyResets _src_components_Main_HeaderSection_HeaderSection_module__root">
                    <div
                        className="_src_components_Main_Main_module__container _src_components_Main_HeaderSection_HeaderSection_module__container">
                        <div className="_src_components_Main_HeaderSection_HeaderSection_module__pageHeader">
                            <div className="_src_components_Main_HeaderSection_HeaderSection_module__content">
                                <div
                                    className="_src_components_Main_HeaderSection_HeaderSection_module__textAndSupportingText">
                                    <div className="_src_components_Main_Main_module__text">
                                        Welcome
                                    </div>
                                    <div className="_src_components_Main_Main_module__supportingText">
                                        Your current sales auction and activity.
                                    </div>
                                </div>
                                <div className="_src_components_Main_HeaderSection_HeaderSection_module__content2">
                                    <div className="_src_components_Main_HeaderSection_HeaderSection_module__actions">
                                        <button
                                            className="_src_components_Main_HeaderSection_HeaderSection_module___NavItemButton">
                                            <div
                                                className="_src_components_resets_module__clapyResets _src_components_Main_Bell1_Bell1_module__root">
                                                <div className="_src_components_Main_Bell1_Bell1_module__icon">
                                                    <svg preserveAspectRatio="none" viewBox="0 0 18 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="_src_components_Main_HeaderSection_HeaderSection_module__icon5">
                                                        <path
                                                            d="M6.35418 19C7.05931 19.6224 7.98555 20 9 20C10.0144 20 10.9407 19.6224 11.6458 19M15 6C15 4.4087 14.3679 2.88258 13.2426 1.75736C12.1174 0.632141 10.5913 0 9 0C7.4087 0 5.88258 0.632141 4.75736 1.75736C3.63214 2.88258 3 4.4087 3 6C3 9.09018 2.22047 11.206 1.34966 12.6054C0.615127 13.7859 0.247858 14.3761 0.261325 14.5408C0.276236 14.7231 0.31486 14.7926 0.461776 14.9016C0.594459 15 1.19259 15 2.38885 15H15.6111C16.8074 15 17.4055 15 17.5382 14.9016C17.6851 14.7926 17.7238 14.7231 17.7387 14.5408C17.7521 14.3761 17.3849 13.7859 16.6503 12.6054C15.7795 11.206 15 9.09019 15 6Z"
                                                            stroke="#667085" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="_src_components_Main_HeaderSection_HeaderSection_module__badge">
                                            <div className="_src_components_Main_HeaderSection_HeaderSection_module__text4">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="_src_components_Main_HeaderSection_HeaderSection_module__divider">
                                <svg preserveAspectRatio="none" viewBox="0 0 1294 1" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="_src_components_Main_HeaderSection_HeaderSection_module__icon9">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1294 1H0V0H1294V1Z"
                                        fill="#EAECF0"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="_src_components_Main_Main_module__section">
                    <div className="_src_components_Main_Main_module__container2">
                        <div className="_src_components_Main_Main_module__section2">

                            <div className="_src_components_Main_Main_module__AcuctionCard">
                                <div className="_src_components_Main_Main_module__pageHeader">
                                    <div className="_src_components_Main_Main_module__imageWrap">
                                        <div className="_src_components_Main_Main_module__image9"></div>
                                    </div>
                                    <div className="_src_components_Main_Main_module__container3">
                                        <div className="_src_components_Main_Main_module__avatarAndContent">
                                            <div
                                                className="_src_components_resets_module__clapyResets _src_components_Main_Main_module__avatarProfilePhoto _src_components_Main_AvatarProfilePhoto_Placeholder_AvatarProfilePhoto_Placeholder_module__root">
                                                <div
                                                    className="_src_components_Main_Main_module__content _src_components_Main_AvatarProfilePhoto_Placeholder_AvatarProfilePhoto_Placeholder_module__content">
                                                </div>
                                            </div>
                                            <div className="_src_components_Main_Main_module__content9">
                                                <div className="_src_components_Main_Main_module__heading">
                                                    <div
                                                        className="_src_components_Main_Main_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Main_module__text12">
                                                            Starts in: 3 days : 2 hours : 24 minutes
                                                        </div>
                                                        <div className="_src_components_Main_Main_module__nameStatus">
                                                            <div
                                                                className="_src_components_resets_module__clapyResets _src_components_Main_Badge_SizeLgIconDotColorWarnin_Badge_SizeLgIconDotColorWarnin_module__root">
                                                                <div
                                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Dot_SizeSm_Dot_SizeSm_module__root">
                                                                    <div
                                                                        className="_src_components_Main_Dot_SizeSm_Dot_SizeSm_module__dot">
                                                                        <svg preserveAspectRatio="none"
                                                                            viewBox="0 0 6 6" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="_src_components_Main_Badge_SizeLgIconDotColorWarnin_Badge_SizeLgIconDotColorWarnin_module__icon">
                                                                            <circle cx="3.00001" cy="3" r="3"
                                                                                fill="#F79009"></circle>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="_src_components_Main_Main_module__text2">
                                                                    Not Live
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="_src_components_Main_Main_module__supportingText2">
                                                                Layers Auction
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_src_components_Main_Main_module__actions">
                                                        <button
                                                            className="_src_components_resets_module__clapyResets _src_components_Main_Button_SizeSmHierarchySecondar_Button_SizeSmHierarchySecondar_module__root">
                                                            <div
                                                                className="_src_components_resets_module__clapyResets _src_components_Main_Main_module__thumbsUp _src_components_Main_ThumbsUp_ThumbsUp_module__root">
                                                                <div
                                                                    className="_src_components_Main_ThumbsUp_ThumbsUp_module__icon">
                                                                    <svg preserveAspectRatio="none" viewBox="0 0 17 18"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                        className="_src_components_Main_Main_module__icon">
                                                                        <path
                                                                            d="M4.83333 17.3333V8.16667M0.666667 9.83333V15.6667C0.666667 16.5871 1.41286 17.3333 2.33333 17.3333H13.5219C14.7558 17.3333 15.8052 16.4331 15.9928 15.2135L16.8902 9.38014C17.1232 7.86575 15.9515 6.5 14.4193 6.5H11.5C11.0398 6.5 10.6667 6.1269 10.6667 5.66667V2.72153C10.6667 1.58666 9.74667 0.666667 8.6118 0.666667C8.34111 0.666667 8.09582 0.826079 7.98588 1.07344L5.05328 7.67178C4.91953 7.97272 4.6211 8.16667 4.29177 8.16667H2.33333C1.41286 8.16667 0.666667 8.91286 0.666667 9.83333Z"
                                                                            stroke="#344054" strokeWidth="1.66667"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="_src_components_Main_Main_module__text3">
                                                                Accept Invite
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="_src_components_Main_Main_module__card">

                                <div className="_src_components_Main_Main_module__content10">
                                    <div className="_src_components_Main_Main_module__sectionHeader">
                                        <div className="_src_components_Main_Main_module__content11">
                                            <div className="_src_components_Main_Main_module__content12">
                                                <div className="_src_components_Main_Main_module__text13">
                                                    Featured Items
                                                </div>
                                            </div>
                                            <div className="_src_components_Main_Main_module__actions2">
                                                <button className="_src_components_Main_Main_module__button3">
                                                    <div className="_src_components_Main_Main_module__text14">
                                                        View Auction
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="_src_components_Main_Main_module__divider">
                                            <svg preserveAspectRatio="none" viewBox="0 0 1246 1" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="_src_components_Main_Main_module__icon16">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1246 1H0V0H1246V1Z"
                                                    fill="#EAECF0"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <div className="_src_components_Main_Main_module__auctionCards">

                                    <div className="_src_components_Main_Main_module__row">
                                        

                                           
                                   
                                        <div className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">

                                            <div className="_src_components_Main_Main_module__image _src_components_Main_Card_Card_module__image">
                                            </div>

                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT">
                                                    <div className="_src_components_Main_Main_module__textBlock">
                                                        Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model
                                                        - Rose Gold
                                                    </div>
                                                    <div className="_src_components_Main_Main_module__textBlock2">
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___3700">
                                                        ₦795,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>

                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text4">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>



                                        {/* <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image2 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT2">
                                                    Phone 8 - 256GB, 4G LTE, Green (Refurbished)
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___37002">
                                                        ₦141,999
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text5">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image3 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Card_Card_module__modernOfficeTableDeskComputerT">
                                                    Modern Office Table Desk Computer Table Furniture
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Card_Card_module___3700">
                                                        ₦37,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text6">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image4 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Card_Card_module__modernOfficeTableDeskComputerT">
                                                    Modern Office Table Desk Computer Table Furniture
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Card_Card_module___3700">
                                                        ₦37,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text7">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div> */}

                                    </div>


                                    {/* <div className="_src_components_Main_Main_module__row2">

                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image5 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT3">
                                                    Acer Travelmate P2 15.6" Fhd Core I7 -1165g7 256gb
                                                    Ssd 8gb Ram, Win 10 Pro, 12 Hrs Battery Life,
                                                    FingerPrint + Wireless Mouse
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___37003">
                                                        ₦377,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text8">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>



                                        
                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image6 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT4">
                                                    Samsung Galaxy A23, 4GB/128GB Memory, Android 12 -
                                                    Balck
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___37004">
                                                        ₦141,999
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text9">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image7 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT5">
                                                    Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model -
                                                    Space Grey
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___37005">
                                                        ₦552,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text10">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__root">
                                            <div
                                                className="_src_components_Main_Main_module__image8 _src_components_Main_Card_Card_module__image">
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__info">
                                                <div className="_src_components_Main_Card_Card_module__tableCell">
                                                    <div
                                                        className="_src_components_resets_module__clapyResets _src_components_Main_Avatar_SizeSmPlaceholderFalseT_Avatar_SizeSmPlaceholderFalseT_module__root">
                                                        <div className="_src_components_Main_Card_Card_module__text">
                                                            KO
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="_src_components_Main_Card_Card_module__textAndSupportingText">
                                                        <div className="_src_components_Main_Card_Card_module__text4">
                                                            <p
                                                                className="_src_components_Main_Card_Card_module__labelWrapper">
                                                                <span
                                                                    className="_src_components_Main_Card_Card_module__label">Koray
                                                                    Okumus</span><span
                                                                    className="_src_components_Main_Card_Card_module__label2">
                                                                </span><span
                                                                    className="_src_components_Main_Card_Card_module__label3">(Highest
                                                                    Bidder)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="_src_components_Main_Main_module__modernOfficeTableDeskComputerT6">
                                                    Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model -
                                                    Space Grey
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__priceOrCurrentBid">
                                                    <div className="_src_components_Main_Card_Card_module__currentBid">
                                                        Current Bid:
                                                    </div>
                                                    <div className="_src_components_Main_Main_module___37006">
                                                        ₦552,000
                                                    </div>
                                                </div>
                                                <div className="_src_components_Main_Card_Card_module__line"></div>
                                            </div>
                                            <div className="_src_components_Main_Card_Card_module__actions">
                                                <button
                                                    className="_src_components_resets_module__clapyResets _src_components_Main_Card_Card_module__button _src_components_Main_Button_SizeMdHierarchyPrimaryI_Button_SizeMdHierarchyPrimaryI_module__root">
                                                    <div className="_src_components_Main_Main_module__text11">
                                                        Add to wishlist
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                    </div> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Home